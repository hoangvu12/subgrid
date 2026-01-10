// Subscription CSV Import
// Direct import of subscription lists (not bank statements)

let subCsvData = [];
let subCsvHeaders = [];
let parsedSubscriptions = [];

const subImportBackdrop = document.getElementById("sub-import-backdrop");
const subImportPanel = document.getElementById("sub-import-panel");
const subImportInner = subImportPanel ? subImportPanel.querySelector("div") : null;

function openSubImport() {
  document.getElementById("sub-import-step-1").classList.remove("hidden");
  document.getElementById("sub-import-step-2").classList.add("hidden");
  document.getElementById("sub-import-step-3").classList.add("hidden");
  document.getElementById("sub-csv-input").value = "";

  subCsvData = [];
  subCsvHeaders = [];
  parsedSubscriptions = [];

  if (subImportBackdrop) subImportBackdrop.classList.remove("hidden");
  if (subImportPanel) subImportPanel.classList.remove("hidden");

  requestAnimationFrame(function() {
    if (subImportBackdrop) subImportBackdrop.classList.remove("opacity-0");
    if (subImportInner) {
      subImportInner.classList.remove("translate-y-full", "sm:scale-95", "opacity-0");
      subImportInner.classList.add("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    }
  });
}

function closeSubImport() {
  if (subImportBackdrop) subImportBackdrop.classList.add("opacity-0");

  if (subImportInner) {
    subImportInner.classList.remove("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    subImportInner.classList.add("translate-y-full", "sm:scale-95", "opacity-0");
  }

  setTimeout(function() {
    if (subImportBackdrop) subImportBackdrop.classList.add("hidden");
    if (subImportPanel) subImportPanel.classList.add("hidden");
  }, 300);
}

// Parse amount string with various currency symbols
function parseAmount(str) {
  if (!str || typeof str !== "string") return { amount: 0, currency: null };

  str = str.trim();

  // Currency symbol to code mapping
  const currencyMap = {
    "$": "USD",
    "£": "GBP",
    "€": "EUR",
    "¥": "JPY",
    "₹": "INR",
    "₩": "KRW",
    "฿": "THB",
    "₫": "VND",
    "R$": "BRL",
    "A$": "AUD",
    "C$": "CAD",
    "kr": "SEK",
    "zł": "PLN",
    "CHF": "CHF"
  };

  let detectedCurrency = null;

  // Check for currency symbols at start or end
  for (const [symbol, code] of Object.entries(currencyMap)) {
    if (str.startsWith(symbol) || str.endsWith(symbol)) {
      detectedCurrency = code;
      str = str.replace(symbol, "");
      break;
    }
  }

  // Handle encoding issues (common with £ symbol in CSV)
  if (str.includes("�")) {
    detectedCurrency = detectedCurrency || "GBP"; // Assume GBP for garbled £
    str = str.replace(/�/g, "");
  }

  // Extract numeric value
  const numericStr = str.replace(/[^0-9.,\-]/g, "").trim();

  // Handle different decimal separators (1.234,56 vs 1,234.56)
  let normalizedStr = numericStr;

  // If comma appears after last period, it's the decimal separator (European format)
  const lastComma = numericStr.lastIndexOf(",");
  const lastPeriod = numericStr.lastIndexOf(".");

  if (lastComma > lastPeriod && lastComma >= numericStr.length - 3) {
    // European format: 1.234,56 -> 1234.56
    normalizedStr = numericStr.replace(/\./g, "").replace(",", ".");
  } else {
    // Standard format: 1,234.56 -> 1234.56
    normalizedStr = numericStr.replace(/,/g, "");
  }

  const amount = Math.abs(parseFloat(normalizedStr)) || 0;

  return { amount, currency: detectedCurrency };
}

// Parse cycle/frequency string to standard format
function parseCycle(str) {
  if (!str || typeof str !== "string") return "Monthly";

  const lower = str.toLowerCase().trim();

  // Check for annual/yearly
  if (lower.includes("annual") || lower.includes("yearly") || lower.includes("year") || lower.includes("12 month")) {
    return "Yearly";
  }

  // Check for bi-annual (every 2 years)
  if (lower.includes("bi-annual") || lower.includes("biannual") || lower.includes("2 year")) {
    return "Yearly"; // Treat as yearly, user can adjust
  }

  // Check for weekly
  if (lower.includes("week")) {
    return "Weekly";
  }

  // Check for quarterly
  if (lower.includes("quarter") || lower.includes("3 month")) {
    return "Monthly"; // Convert to monthly equivalent
  }

  // Default to monthly
  return "Monthly";
}

// Parse date in various formats
function parseDate(str) {
  if (!str || typeof str !== "string") return null;

  str = str.trim();
  if (!str) return null;

  // Try DD/MM/YYYY format first (common in UK/EU)
  const ddmmyyyy = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (ddmmyyyy) {
    const [, day, month, year] = ddmmyyyy;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    if (!isNaN(date.getTime())) return date;
  }

  // Try MM/DD/YYYY format (US)
  const mmddyyyy = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (mmddyyyy) {
    const [, month, day, year] = mmddyyyy;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    if (!isNaN(date.getTime())) return date;
  }

  // Try YYYY-MM-DD format (ISO)
  const iso = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (iso) {
    const [, year, month, day] = iso;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    if (!isNaN(date.getTime())) return date;
  }

  // Fallback to JavaScript's Date parser
  const parsed = new Date(str);
  if (!isNaN(parsed.getTime())) return parsed;

  return null;
}

function handleSubCSV(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
    const parsed = parseCSV(e.target.result); // Reuse parseCSV from bank-import.js
    const headers = parsed.headers;
    const rows = parsed.rows;

    if (headers.length < 2 || rows.length < 1) {
      alert(t("subImport.invalidCsv"));
      return;
    }

    subCsvHeaders = headers;
    subCsvData = rows;

    let optionsHtml = '<option value="-1">-- Skip --</option>';
    for (let i = 0; i < headers.length; i++) {
      optionsHtml += '<option value="' + i + '">' + escapeHtml(headers[i]) + '</option>';
    }

    const nameSelect = document.getElementById("sub-map-name");
    const priceSelect = document.getElementById("sub-map-price");
    const cycleSelect = document.getElementById("sub-map-cycle");

    nameSelect.innerHTML = optionsHtml;
    priceSelect.innerHTML = optionsHtml;
    cycleSelect.innerHTML = optionsHtml;

    // Auto-detect columns
    const lowerHeaders = headers.map(h => h.toLowerCase());

    let nameIdx = -1;
    let priceIdx = -1;
    let cycleIdx = -1;

    for (let i = 0; i < lowerHeaders.length; i++) {
      const h = lowerHeaders[i];

      if (nameIdx < 0 && (h.includes("name") || h.includes("service") || h.includes("subscription") || h === "description")) {
        nameIdx = i;
      }
      if (priceIdx < 0 && (h.includes("price") || h.includes("amount") || h.includes("cost") || h.includes("fee"))) {
        priceIdx = i;
      }
      if (cycleIdx < 0 && (h.includes("cycle") || h.includes("frequency") || h.includes("billing") || h.includes("period"))) {
        cycleIdx = i;
      }
    }

    if (nameIdx >= 0) nameSelect.value = nameIdx;
    if (priceIdx >= 0) priceSelect.value = priceIdx;
    if (cycleIdx >= 0) cycleSelect.value = cycleIdx;

    updateSubCSVPreview();

    nameSelect.onchange = updateSubCSVPreview;
    priceSelect.onchange = updateSubCSVPreview;
    cycleSelect.onchange = updateSubCSVPreview;

    document.getElementById("sub-csv-row-count").textContent = rows.length;
    document.getElementById("sub-import-step-1").classList.add("hidden");
    document.getElementById("sub-import-step-2").classList.remove("hidden");
  };

  reader.readAsText(file, "UTF-8");
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function updateSubCSVPreview() {
  const nameCol = parseInt(document.getElementById("sub-map-name").value);
  const priceCol = parseInt(document.getElementById("sub-map-price").value);
  const cycleCol = parseInt(document.getElementById("sub-map-cycle").value);

  const previewEl = document.getElementById("sub-csv-preview");

  let html = "";
  const sampleRows = subCsvData.slice(0, 4);

  for (let i = 0; i < sampleRows.length; i++) {
    const row = sampleRows[i];
    const name = nameCol >= 0 ? (row[nameCol] || "-") : "-";
    const rawPrice = priceCol >= 0 ? (row[priceCol] || "-") : "-";
    const cycle = cycleCol >= 0 ? (row[cycleCol] || "-") : "-";

    // Parse and format the price for preview
    let priceDisplay = rawPrice;
    if (rawPrice !== "-") {
      const parsed = parseAmount(rawPrice);
      if (parsed.amount > 0) {
        const currSymbol = parsed.currency ? (currencies[parsed.currency]?.symbol || "$") : "$";
        priceDisplay = currSymbol + parsed.amount.toFixed(2);
      }
    }

    // Parse cycle for preview
    let cycleDisplay = cycle;
    if (cycle !== "-" && cycle.length > 0) {
      cycleDisplay = parseCycle(cycle);
    }

    if (!name.trim()) continue; // Skip empty rows

    html += '<div class="flex justify-between py-1.5 border-b border-slate-100 last:border-0 text-sm">';
    html += '<span class="flex-1 truncate font-medium text-slate-700">' + escapeHtml(name) + '</span>';
    html += '<span class="text-slate-500 px-2">' + escapeHtml(cycleDisplay) + '</span>';
    html += '<span class="text-slate-900 font-semibold">' + escapeHtml(priceDisplay) + '</span>';
    html += '</div>';
  }

  if (!html) {
    html = '<div class="text-xs text-slate-400 text-center py-2">No valid rows found</div>';
  }

  previewEl.innerHTML = html;
}

function parseSubscriptions() {
  const nameCol = parseInt(document.getElementById("sub-map-name").value);
  const priceCol = parseInt(document.getElementById("sub-map-price").value);
  const cycleCol = parseInt(document.getElementById("sub-map-cycle").value);

  if (nameCol < 0 || priceCol < 0) {
    alert(t("subImport.selectColumns"));
    return;
  }

  parsedSubscriptions = [];
  let detectedCurrency = null;

  for (let i = 0; i < subCsvData.length; i++) {
    const row = subCsvData[i];
    const name = (row[nameCol] || "").trim();
    const rawPrice = row[priceCol] || "";
    const rawCycle = cycleCol >= 0 ? (row[cycleCol] || "") : "";

    // Skip empty rows or rows with "various" or non-numeric prices
    if (!name) continue;

    const { amount, currency } = parseAmount(rawPrice);
    if (amount <= 0) continue;

    // Track the first detected currency for all subscriptions
    if (currency && !detectedCurrency) {
      detectedCurrency = currency;
    }

    const cycle = parseCycle(rawCycle);

    parsedSubscriptions.push({
      name: name,
      price: Math.round(amount * 100) / 100,
      cycle: cycle,
      currency: currency || detectedCurrency || selectedCurrency,
      selected: true
    });
  }

  // Update all subscriptions to use detected currency if available
  if (detectedCurrency) {
    for (let i = 0; i < parsedSubscriptions.length; i++) {
      if (!parsedSubscriptions[i].currency || parsedSubscriptions[i].currency === selectedCurrency) {
        parsedSubscriptions[i].currency = detectedCurrency;
      }
    }
  }

  renderParsedSubscriptions();

  document.getElementById("sub-import-step-2").classList.add("hidden");
  document.getElementById("sub-import-step-3").classList.remove("hidden");
}

function renderParsedSubscriptions() {
  const listEl = document.getElementById("parsed-sub-list");
  const noResultsEl = document.getElementById("no-parsed-subs");
  const addBtn = document.getElementById("add-parsed-btn");

  document.getElementById("parsed-count").textContent = parsedSubscriptions.length;

  if (parsedSubscriptions.length === 0) {
    listEl.classList.add("hidden");
    noResultsEl.classList.remove("hidden");
    addBtn.classList.add("hidden");
    return;
  }

  listEl.classList.remove("hidden");
  noResultsEl.classList.add("hidden");
  addBtn.classList.remove("hidden");

  let html = "";
  for (let i = 0; i < parsedSubscriptions.length; i++) {
    const sub = parsedSubscriptions[i];
    const ringClass = sub.selected ? " ring-2 ring-indigo-500" : "";
    const checked = sub.selected ? " checked" : "";

    const currSymbol = currencies[sub.currency]?.symbol || "$";
    const cycleLabel = t("form.cycle" + sub.cycle) || sub.cycle;

    html += '<label class="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 cursor-pointer hover:bg-slate-50 transition-colors' + ringClass + '">';
    html += '<input type="checkbox"' + checked + ' onchange="toggleParsedSub(' + i + ')" class="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500">';
    html += '<div class="flex-1 min-w-0">';
    html += '<div class="font-semibold text-slate-900 text-sm truncate">' + escapeHtml(sub.name) + '</div>';
    html += '<div class="text-xs text-slate-500">' + cycleLabel + '</div>';
    html += '</div>';
    html += '<div class="text-sm font-bold text-slate-900">' + currSymbol + sub.price.toFixed(2) + '</div>';
    html += '</label>';
  }

  listEl.innerHTML = html;
  updateAddParsedButtonText();
}

function toggleParsedSub(idx) {
  parsedSubscriptions[idx].selected = !parsedSubscriptions[idx].selected;
  renderParsedSubscriptions();
}

function updateAddParsedButtonText() {
  let selectedCount = 0;
  for (let i = 0; i < parsedSubscriptions.length; i++) {
    if (parsedSubscriptions[i].selected) selectedCount++;
  }

  const btn = document.getElementById("add-parsed-btn");

  if (selectedCount > 0) {
    const key = selectedCount > 1 ? "subImport.addCountPlural" : "subImport.addCount";
    btn.textContent = t(key, { count: selectedCount });
    btn.disabled = false;
    btn.classList.remove("opacity-50", "cursor-not-allowed");
  } else {
    btn.textContent = t("subImport.addSelected");
    btn.disabled = true;
    btn.classList.add("opacity-50", "cursor-not-allowed");
  }
}

function addParsedSubscriptions() {
  const toAdd = parsedSubscriptions.filter(function(s) { return s.selected; });
  if (toAdd.length === 0) return;

  for (let i = 0; i < toAdd.length; i++) {
    const sub = toAdd[i];
    subs.push({
      id: Date.now().toString() + Math.random().toString(36).slice(2),
      name: sub.name,
      price: sub.price,
      currency: sub.currency,
      cycle: sub.cycle,
      url: "",
      color: randColor().id
    });
  }

  save();
  closeSubImport();

  const key = toAdd.length > 1 ? "subImport.addedSuccessPlural" : "subImport.addedSuccess";
  alert(t(key, { count: toAdd.length }));
}
