let csvData = [];
let csvHeaders = [];
let detectedSubs = [];
let otherTransactions = [];
let otherExpanded = false;

// cache these so we're not querying the dom every time
const bankBackdrop = document.getElementById("bank-import-backdrop");
const bankPanel = document.getElementById("bank-import-panel");
const bankInner = bankPanel ? bankPanel.querySelector("div") : null;

function openBankImport() {
  document.getElementById("bank-step-1").classList.remove("hidden");
  document.getElementById("bank-step-2").classList.add("hidden");
  document.getElementById("bank-step-3").classList.add("hidden");
  document.getElementById("bank-csv-input").value = "";

  csvData = [];
  csvHeaders = [];
  detectedSubs = [];
  otherTransactions = [];
  otherExpanded = false;

  if (bankBackdrop) bankBackdrop.classList.remove("hidden");
  if (bankPanel) bankPanel.classList.remove("hidden");

  // rAF needed or the transition won't trigger
  requestAnimationFrame(function() {
    if (bankBackdrop) bankBackdrop.classList.remove("opacity-0");
    if (bankInner) {
      bankInner.classList.remove("translate-y-full", "sm:scale-95", "opacity-0");
      bankInner.classList.add("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    }
  });
}

function closeBankImport() {
  if (bankBackdrop) bankBackdrop.classList.add("opacity-0");

  if (bankInner) {
    bankInner.classList.remove("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    bankInner.classList.add("translate-y-full", "sm:scale-95", "opacity-0");
  }

  setTimeout(function() {
    if (bankBackdrop) bankBackdrop.classList.add("hidden");
    if (bankPanel) bankPanel.classList.add("hidden");
  }, 300);
}

// basic csv parser that handles quoted fields
// not perfect but works for most bank exports
function parseCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length < 2) {
    return { headers: [], rows: [] };
  }

  function parseLine(line) {
    const fields = [];
    let current = "";
    let insideQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];

      if (ch === '"') {
        insideQuotes = !insideQuotes;
      } else if (ch === "," && !insideQuotes) {
        fields.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    fields.push(current.trim());
    return fields;
  }

  const headers = parseLine(lines[0]);

  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const row = parseLine(lines[i]);
    const hasData = row.some(cell => cell !== "");
    if (hasData) rows.push(row);
  }

  return { headers: headers, rows: rows };
}

function handleBankCSV(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
    const parsed = parseCSV(e.target.result);
    const headers = parsed.headers;
    const rows = parsed.rows;

    if (headers.length < 3 || rows.length < 1) {
      alert(t("bankImport.invalidCsv"));
      return;
    }

    csvHeaders = headers;
    csvData = rows;

    let optionsHtml = "";
    for (let i = 0; i < headers.length; i++) {
      optionsHtml += '<option value="' + i + '">' + headers[i] + '</option>';
    }

    const dateSelect = document.getElementById("map-date");
    const descSelect = document.getElementById("map-description");
    const amountSelect = document.getElementById("map-amount");

    dateSelect.innerHTML = optionsHtml;
    descSelect.innerHTML = optionsHtml;
    amountSelect.innerHTML = optionsHtml;

    // try to auto-detect which columns are which
    // this works for most bank exports but user can fix if wrong
    const lowerHeaders = headers.map(h => h.toLowerCase());

    let dateIdx = -1;
    let descIdx = -1;
    let amountIdx = -1;

    for (let i = 0; i < lowerHeaders.length; i++) {
      const h = lowerHeaders[i];
      if (dateIdx < 0 && (h.includes("date") || h.includes("posted") || h.includes("time"))) {
        dateIdx = i;
      }
      if (descIdx < 0 && (h.includes("description") || h.includes("payee") || h.includes("merchant") || h.includes("name") || h.includes("memo") || h.includes("details"))) {
        descIdx = i;
      }
      if (amountIdx < 0 && (h.includes("amount") || h.includes("debit") || h.includes("withdrawal") || h.includes("charge") || h.includes("payment"))) {
        amountIdx = i;
      }
    }

    if (dateIdx >= 0) dateSelect.value = dateIdx;
    if (descIdx >= 0) descSelect.value = descIdx;
    if (amountIdx >= 0) amountSelect.value = amountIdx;

    updateCSVPreview();

    dateSelect.onchange = updateCSVPreview;
    descSelect.onchange = updateCSVPreview;
    amountSelect.onchange = updateCSVPreview;

    document.getElementById("csv-row-count").textContent = rows.length;
    document.getElementById("bank-step-1").classList.add("hidden");
    document.getElementById("bank-step-2").classList.remove("hidden");
  };

  reader.readAsText(file);
}

function updateCSVPreview() {
  const dateCol = parseInt(document.getElementById("map-date").value);
  const descCol = parseInt(document.getElementById("map-description").value);
  const amtCol = parseInt(document.getElementById("map-amount").value);

  const previewEl = document.getElementById("csv-preview");

  let html = "";
  const sampleRows = csvData.slice(0, 3);

  for (let i = 0; i < sampleRows.length; i++) {
    const row = sampleRows[i];
    html += '<div class="flex justify-between py-1 border-b border-slate-100 last:border-0">';
    html += '<span class="text-slate-400 w-20 shrink-0">' + (row[dateCol] || "-") + '</span>';
    html += '<span class="flex-1 truncate px-2">' + (row[descCol] || "-") + '</span>';
    html += '<span class="text-slate-900 font-medium">' + (row[amtCol] || "-") + '</span>';
    html += '</div>';
  }

  previewEl.innerHTML = html;
}

function detectRecurring() {
  const dateCol = parseInt(document.getElementById("map-date").value);
  const descCol = parseInt(document.getElementById("map-description").value);
  const amtCol = parseInt(document.getElementById("map-amount").value);

  const transactions = [];
  for (let i = 0; i < csvData.length; i++) {
    const row = csvData[i];
    const rawAmt = row[amtCol] ? row[amtCol].replace(/[^0-9.-]/g, "") : "0";
    const amount = Math.abs(parseFloat(rawAmt));
    const date = new Date(row[dateCol]);
    const desc = row[descCol] ? row[descCol].trim() : "";

    if (!desc || isNaN(amount) || amount <= 0 || isNaN(date.getTime())) continue;

    transactions.push({ date: date, description: desc, amount: amount });
  }

  // normalize merchant names to group similar transactions together
  // eg "NETFLIX.COM" and "NETFLIX INC" should match
  function normalizeDesc(str) {
    return str
      .toUpperCase()
      .replace(/[^A-Z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .replace(/\b(INC|LLC|LTD|CORP|CO|PAYMENT|PURCHASE|POS|ACH|DEBIT)\b/g, "")
      .trim()
      .split(" ")
      .slice(0, 3) // just take first 3 words
      .join(" ");
  }

  const groups = {};
  for (let i = 0; i < transactions.length; i++) {
    const txn = transactions[i];
    const key = normalizeDesc(txn.description);
    if (!key) continue;

    if (!groups[key]) {
      groups[key] = { txns: [], names: new Set() };
    }
    groups[key].txns.push(txn);
    groups[key].names.add(txn.description);
  }

  const recurring = [];
  const groupKeys = Object.keys(groups);

  for (let g = 0; g < groupKeys.length; g++) {
    const key = groupKeys[g];
    const group = groups[key];

    // need at least 2 occurrences to detect a pattern
    if (group.txns.length < 2) continue;

    group.txns.sort(function(a, b) { return a.date - b.date; });

    let totalDays = 0;
    for (let i = 1; i < group.txns.length; i++) {
      const daysBetween = Math.round((group.txns[i].date - group.txns[i-1].date) / (1000 * 60 * 60 * 24));
      totalDays += daysBetween;
    }
    const avgDays = totalDays / (group.txns.length - 1);

    // ranges are fuzzy to account for weekends and billing day variations
    let cycle = null;
    if (avgDays >= 6 && avgDays <= 8) cycle = "Weekly";
    else if (avgDays >= 13 && avgDays <= 16) cycle = "Biweekly";
    else if (avgDays >= 25 && avgDays <= 35) cycle = "Monthly";
    else if (avgDays >= 85 && avgDays <= 100) cycle = "Quarterly";
    else if (avgDays >= 355 && avgDays <= 375) cycle = "Yearly";

    if (!cycle) continue;

    // subscriptions have fixed prices, so check amounts are within 20%
    let totalAmount = 0;
    for (let i = 0; i < group.txns.length; i++) {
      totalAmount += group.txns[i].amount;
    }
    const avgAmt = totalAmount / group.txns.length;

    let isConsistent = true;
    for (let i = 0; i < group.txns.length; i++) {
      const variance = Math.abs(group.txns[i].amount - avgAmt) / avgAmt;
      if (variance >= 0.2) {
        isConsistent = false;
        break;
      }
    }
    if (!isConsistent) continue;

    const nameCount = {};
    for (const name of group.names) {
      nameCount[name] = (nameCount[name] || 0) + 1;
    }
    let bestName = "";
    let bestCount = 0;
    for (const name in nameCount) {
      if (nameCount[name] > bestCount) {
        bestCount = nameCount[name];
        bestName = name;
      }
    }

    recurring.push({
      name: bestName,
      price: Math.round(avgAmt * 100) / 100,
      cycle: (cycle === "Biweekly" || cycle === "Quarterly") ? "Monthly" : cycle,
      count: group.txns.length,
      selected: true
    });
  }

  recurring.sort(function(a, b) {
    if (b.count !== a.count) return b.count - a.count;
    return b.price - a.price;
  });

  const detectedNames = new Set();
  for (let i = 0; i < recurring.length; i++) {
    detectedNames.add(recurring[i].name.toUpperCase());
  }

  const otherMap = {};
  for (let i = 0; i < transactions.length; i++) {
    const txn = transactions[i];
    if (detectedNames.has(txn.description.toUpperCase())) continue;

    if (!otherMap[txn.description]) {
      otherMap[txn.description] = { name: txn.description, price: txn.amount, count: 0 };
    }
    otherMap[txn.description].count++;
    otherMap[txn.description].price = txn.amount;
  }

  // $500+ is probably not a subscription
  const otherList = [];
  for (const key in otherMap) {
    const item = otherMap[key];
    if (item.price > 0 && item.price < 500) {
      otherList.push(item);
    }
  }
  otherList.sort(function(a, b) {
    if (b.count !== a.count) return b.count - a.count;
    return a.name.localeCompare(b.name);
  });

  detectedSubs = recurring;
  otherTransactions = otherList;
  otherExpanded = false;

  renderDetectedList();
  renderOtherTransactions();

  document.getElementById("bank-step-2").classList.add("hidden");
  document.getElementById("bank-step-3").classList.remove("hidden");
}

function renderDetectedList() {
  const listEl = document.getElementById("detected-list");
  const noResultsEl = document.getElementById("no-detected");
  const addBtn = document.getElementById("add-selected-btn");

  document.getElementById("detected-count").textContent = detectedSubs.length;

  if (detectedSubs.length === 0) {
    listEl.classList.add("hidden");
    noResultsEl.classList.remove("hidden");
    addBtn.classList.add("hidden");
    return;
  }

  listEl.classList.remove("hidden");
  noResultsEl.classList.add("hidden");
  addBtn.classList.remove("hidden");

  let html = "";
  for (let i = 0; i < detectedSubs.length; i++) {
    const sub = detectedSubs[i];
    const ringClass = sub.selected ? " ring-2 ring-indigo-500" : "";
    const checked = sub.selected ? " checked" : "";

    html += '<label class="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 cursor-pointer hover:bg-slate-50 transition-colors' + ringClass + '">';
    html += '<input type="checkbox"' + checked + ' onchange="toggleDetectedSub(' + i + ')" class="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500">';
    html += '<div class="flex-1 min-w-0">';
    html += '<div class="font-semibold text-slate-900 text-sm truncate">' + sub.name + '</div>';
    html += '<div class="text-xs text-slate-500">' + t("form.cycle" + sub.cycle) + ' · ' + t("bankImport.foundInStatement", { count: sub.count }) + '</div>';
    html += '</div>';
    html += '<div class="text-sm font-bold text-slate-900">$' + sub.price.toFixed(2) + '</div>';
    html += '</label>';
  }

  listEl.innerHTML = html;
  updateAddButtonText();
}

function toggleDetectedSub(idx) {
  detectedSubs[idx].selected = !detectedSubs[idx].selected;
  renderDetectedList();
}

function toggleOtherTransactions() {
  otherExpanded = !otherExpanded;

  var container = document.getElementById("other-transactions");
  var caret = document.getElementById("other-caret");

  if (otherExpanded) {
    container.classList.remove("hidden");
    caret.style.transform = "rotate(180deg)";
  } else {
    container.classList.add("hidden");
    caret.style.transform = "";
  }
}

function renderOtherTransactions(searchFilter) {
  const listEl = document.getElementById("other-list");
  document.getElementById("other-count").textContent = otherTransactions.length;

  let filtered = otherTransactions;
  if (searchFilter && searchFilter.length > 0) {
    const q = searchFilter.toLowerCase();
    filtered = otherTransactions.filter(function(txn) {
      return txn.name.toLowerCase().includes(q);
    });
  }

  if (filtered.length === 0) {
    listEl.innerHTML = '<div class="text-xs text-slate-400 text-center py-3">' + t("bankImport.noTransactions") + '</div>';
    return;
  }

  // rendering 100+ buttons gets sluggish
  let html = "";
  const limit = Math.min(filtered.length, 50);

  for (let i = 0; i < limit; i++) {
    const txn = filtered[i];
    const origIdx = otherTransactions.indexOf(txn);

    html += '<button onclick="addFromOther(' + origIdx + ')" class="flex w-full items-center justify-between rounded-lg border border-slate-100 bg-white px-3 py-2 text-left text-sm transition-all hover:border-indigo-200 hover:bg-indigo-50">';
    html += '<div class="flex-1 min-w-0">';
    html += '<div class="font-medium text-slate-700 truncate">' + txn.name + '</div>';
    html += '<div class="text-xs text-slate-400">' + t("bankImport.foundInStatement", { count: txn.count }) + '</div>';
    html += '</div>';
    html += '<div class="flex items-center gap-2">';
    html += '<span class="font-semibold text-slate-900">$' + txn.price.toFixed(2) + '</span>';
    html += '<span class="iconify h-4 w-4 text-slate-400" data-icon="ph:plus-circle-bold"></span>';
    html += '</div></button>';
  }

  listEl.innerHTML = html;
}

function filterOtherTransactions(q) {
  renderOtherTransactions(q);
}

function addFromOther(idx) {
  const txn = otherTransactions[idx];
  if (!txn) return;

  detectedSubs.push({
    name: txn.name,
    price: txn.price,
    cycle: "Monthly", // default to monthly, user can change later
    count: txn.count,
    selected: true
  });

  otherTransactions.splice(idx, 1);
  renderDetectedList();
  renderOtherTransactions();
}

function updateAddButtonText() {
  let selectedCount = 0;
  for (let i = 0; i < detectedSubs.length; i++) {
    if (detectedSubs[i].selected) selectedCount++;
  }

  const btn = document.getElementById("add-selected-btn");

  if (selectedCount > 0) {
    const key = selectedCount > 1 ? "bankImport.addCountPlural" : "bankImport.addCount";
    btn.textContent = t(key, { count: selectedCount });
    btn.disabled = false;
    btn.classList.remove("opacity-50", "cursor-not-allowed");
  } else {
    btn.textContent = t("bankImport.addSelected");
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");
  }
}

function addSelectedSubscriptions() {
  const toAdd = detectedSubs.filter(function(s) { return s.selected; });
  if (toAdd.length === 0) return;

  for (let i = 0; i < toAdd.length; i++) {
    const sub = toAdd[i];
    subs.push({
      id: Date.now().toString() + Math.random().toString(36).slice(2),
      name: cleanSubscriptionName(sub.name),
      price: sub.price,
      currency: selectedCurrency,
      cycle: sub.cycle,
      url: "",
      color: randColor().id
    });
  }

  save();
  closeBankImport();

  const key = toAdd.length > 1 ? "bankImport.addedSuccessPlural" : "bankImport.addedSuccess";
  alert(t(key, { count: toAdd.length }));
}

// bank names are ugly like "NETFLIX.COM*PURCHASE" so clean them up
function cleanSubscriptionName(rawName) {
  let name = rawName
    .replace(/\*+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\b(PURCHASE|POS|ACH|DEBIT|RECURRING|PAYMENT)\b/gi, "")
    .trim();

  const words = name.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
  }

  return words.join(" ").substring(0, 30);
}
