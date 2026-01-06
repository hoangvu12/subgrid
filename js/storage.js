// localstorage keys - using vexly prefix for namespacing
// (this was the old name of the project)
const STORAGE_KEY = "vexly_flow_data";
const CURRENCY_KEY = "vexly_currency";

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      subs = JSON.parse(raw);
    }
  } catch (err) {
    // probably corrupted data, just start fresh
    console.warn("failed to load saved data:", err);
    subs = [];
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(subs));
  renderList();
  renderStats();
}

function loadCurrency() {
  const saved = localStorage.getItem(CURRENCY_KEY);

  // make sure it's a valid currency code
  if (saved && currencies[saved]) {
    selectedCurrency = saved;
  } else {
    selectedCurrency = "USD";
  }
}

function saveCurrency(code) {
  selectedCurrency = code;
  localStorage.setItem(CURRENCY_KEY, code);

  renderList();
  if (step === 2) renderGrid();
  if (step === 3) renderStats();
}

function exportData() {
  const exportObj = {
    version: 1,
    exportedAt: new Date().toISOString(),
    currency: selectedCurrency,
    subscriptions: subs
  };

  const jsonStr = JSON.stringify(exportObj, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = "subgrid-backup-" + new Date().toISOString().split("T")[0] + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(blobUrl);
}

function importData(evt) {
  const file = evt.target.files && evt.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);

      if (!data.subscriptions || !Array.isArray(data.subscriptions)) {
        throw new Error("Invalid file format");
      }

      for (let i = 0; i < data.subscriptions.length; i++) {
        const sub = data.subscriptions[i];
        if (!sub.id || !sub.name || typeof sub.price !== "number") {
          throw new Error("Invalid subscription data");
        }
      }

      let replaceExisting = true;
      if (subs.length > 0) {
        replaceExisting = confirm(
          "You have " + subs.length + " existing subscription(s).\n\n" +
          "Click OK to replace them with " + data.subscriptions.length + " imported subscription(s).\n\n" +
          "Click Cancel to merge (add imported to existing)."
        );
      }

      if (replaceExisting || subs.length === 0) {
        subs = data.subscriptions;
      } else {
        for (let i = 0; i < data.subscriptions.length; i++) {
          const imported = data.subscriptions[i];
          subs.push({
            id: Date.now().toString() + Math.random().toString(36).slice(2),
            name: imported.name,
            price: imported.price,
            currency: imported.currency || selectedCurrency || "USD",
            cycle: imported.cycle,
            url: imported.url || "",
            color: imported.color
          });
        }
      }

      if (data.currency && currencies[data.currency]) {
        saveCurrency(data.currency);
      }

      save();
      closeSettings();
      alert("Successfully imported " + data.subscriptions.length + " subscription(s)!");

    } catch (err) {
      alert("Failed to import: " + err.message);
    }
  };

  reader.readAsText(file);

  // reset the input so they can import the same file again if needed
  evt.target.value = "";
}
