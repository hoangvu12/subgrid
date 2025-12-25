const backdrop = document.getElementById("modal-backdrop");
const panel = document.getElementById("modal-panel");
const modalInner = panel ? panel.querySelector("div") : null;

function showModal() {
  backdrop.classList.remove("hidden");
  panel.classList.remove("hidden");

  // rAF or the transition won't fire
  requestAnimationFrame(function() {
    backdrop.classList.remove("opacity-0");
    if (modalInner) {
      modalInner.classList.remove("translate-y-full", "sm:scale-95", "opacity-0");
      modalInner.classList.add("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    }
  });
}

function hideModal() {
  backdrop.classList.add("opacity-0");

  if (modalInner) {
    modalInner.classList.remove("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    modalInner.classList.add("translate-y-full", "sm:scale-95", "opacity-0");
  }

  setTimeout(function() {
    backdrop.classList.add("hidden");
    panel.classList.add("hidden");
  }, 300);
}

function openModal() {
  document.getElementById("sub-form").reset();
  document.getElementById("entry-id").value = "";
  document.getElementById("sub-currency").value = selectedCurrency;
  updateFavicon("");
  pickColor(randColor().id);

  document.getElementById("modal-title").innerText = "Add Subscription";
  document.querySelector("#sub-form button[type='submit']").innerText = "Save Item";

  showModal();
}

function closeModal() {
  hideModal();
}

function openModalWithPreset(presetIdx) {
  const preset = presets[presetIdx];
  if (!preset) return;

  document.getElementById("sub-form").reset();
  document.getElementById("entry-id").value = "";
  document.getElementById("sub-currency").value = selectedCurrency;
  document.getElementById("name").value = preset.name;
  document.getElementById("price").value = preset.price;
  document.getElementById("cycle").value = preset.cycle;
  document.getElementById("url").value = preset.domain;

  updateFavicon(preset.domain);
  pickColor(preset.color);

  document.getElementById("modal-title").innerText = "Add Subscription";
  document.querySelector("#sub-form button[type='submit']").innerText = "Save Item";

  showModal();
}


const settingsBackdrop = document.getElementById("settings-backdrop");
const settingsPanel = document.getElementById("settings-panel");
const settingsInner = settingsPanel ? settingsPanel.querySelector("div") : null;

function openSettings() {
  settingsBackdrop.classList.remove("hidden");
  settingsPanel.classList.remove("hidden");

  requestAnimationFrame(function() {
    settingsBackdrop.classList.remove("opacity-0");
    if (settingsInner) {
      settingsInner.classList.remove("translate-y-full", "sm:scale-95", "opacity-0");
      settingsInner.classList.add("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    }
  });
}

function closeSettings() {
  settingsBackdrop.classList.add("opacity-0");

  if (settingsInner) {
    settingsInner.classList.remove("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    settingsInner.classList.add("translate-y-full", "sm:scale-95", "opacity-0");
  }

  setTimeout(function() {
    settingsBackdrop.classList.add("hidden");
    settingsPanel.classList.add("hidden");
  }, 300);
}

let selectedCategory = null;

const presetsBackdrop = document.getElementById("presets-backdrop");
const presetsPanel = document.getElementById("presets-panel");
const presetsInner = presetsPanel ? presetsPanel.querySelector("div") : null;

function openPresetsBrowser() {
  selectedCategory = null;
  document.getElementById("presets-search").value = "";

  renderCategoryFilters();
  renderPresetsBrowserList();

  if (presetsBackdrop) presetsBackdrop.classList.remove("hidden");
  if (presetsPanel) presetsPanel.classList.remove("hidden");

  requestAnimationFrame(function() {
    if (presetsBackdrop) presetsBackdrop.classList.remove("opacity-0");
    if (presetsInner) {
      presetsInner.classList.remove("translate-y-full", "sm:scale-95", "opacity-0");
      presetsInner.classList.add("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    }
  });
}

function closePresetsBrowser() {
  if (presetsBackdrop) presetsBackdrop.classList.add("opacity-0");

  if (presetsInner) {
    presetsInner.classList.remove("translate-y-0", "sm:translate-y-0", "sm:scale-100", "opacity-100");
    presetsInner.classList.add("translate-y-full", "sm:scale-95", "opacity-0");
  }

  setTimeout(function() {
    if (presetsBackdrop) presetsBackdrop.classList.add("hidden");
    if (presetsPanel) presetsPanel.classList.add("hidden");
  }, 300);
}

function renderCategoryFilters() {
  const filtersEl = document.getElementById("category-filters");
  if (!filtersEl) return;

  const cats = getCategories();

  let html = '<button onclick="selectCategory(null)" class="category-btn px-3 py-1 rounded-full text-xs font-semibold transition-all ';
  html += selectedCategory ? 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600' : 'bg-slate-900 dark:bg-indigo-600 text-white';
  html += '">All</button>';

  for (let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    const isActive = (selectedCategory === cat);
    html += '<button onclick="selectCategory(\'' + cat + '\')" class="category-btn px-3 py-1 rounded-full text-xs font-semibold transition-all ';
    html += isActive ? 'bg-slate-900 dark:bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600';
    html += '">' + cat + '</button>';
  }

  filtersEl.innerHTML = html;
}

function selectCategory(cat) {
  selectedCategory = cat;
  renderCategoryFilters();

  const searchInput = document.getElementById("presets-search");
  const query = searchInput ? searchInput.value : "";
  filterPresets(query);
}

function filterPresets(searchQuery) {
  const q = searchQuery.toLowerCase().trim();
  let results = presets;

  if (selectedCategory) {
    results = results.filter(function(p) {
      return p.category === selectedCategory;
    });
  }

  if (q.length > 0) {
    results = results.filter(function(p) {
      return p.name.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.domain.toLowerCase().includes(q);
    });
  }

  renderPresetsBrowserList(results);
}

function renderPresetsBrowserList(presetsToShow) {
  if (!presetsToShow) presetsToShow = presets;

  const container = document.getElementById("presets-browser-list");
  if (!container) return;

  if (presetsToShow.length === 0) {
    container.innerHTML = '<div class="text-center text-slate-400 dark:text-slate-500 py-8">No subscriptions found</div>';
    return;
  }

  const byCategory = {};
  for (let i = 0; i < presetsToShow.length; i++) {
    const p = presetsToShow[i];
    if (!byCategory[p.category]) {
      byCategory[p.category] = [];
    }
    byCategory[p.category].push(p);
  }

  let html = "";
  const categoryNames = Object.keys(byCategory);

  for (let c = 0; c < categoryNames.length; c++) {
    const catName = categoryNames[c];
    const items = byCategory[catName];

    html += '<div class="mb-5">';
    html += '<h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">' + catName + '</h4>';
    html += '<div class="grid grid-cols-2 gap-2">';

    for (let i = 0; i < items.length; i++) {
      const p = items[i];
      const idx = presets.indexOf(p);
      const logo = "https://img.logo.dev/" + p.domain + "?token=pk_KuI_oR-IQ1-fqpAfz3FPEw&size=100&retina=true&format=png";

      html += '<button onclick="selectPresetFromBrowser(' + idx + ')" ';
      html += 'class="flex items-center gap-3 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-700 p-3 text-left shadow-sm transition-all hover:border-indigo-200 dark:hover:border-indigo-600 hover:shadow-md active:scale-[0.98]">';
      html += '<img src="' + logo + '" class="h-10 w-10 rounded-lg object-contain shrink-0" crossorigin="anonymous" alt="' + p.name + '">';
      html += '<div class="min-w-0 flex-1">';
      html += '<div class="font-semibold text-slate-900 dark:text-slate-100 text-sm truncate">' + p.name + '</div>';
      html += '<div class="text-xs text-slate-500 dark:text-slate-400">$' + p.price + '/mo</div>';
      html += '</div></button>';
    }

    html += '</div></div>';
  }

  container.innerHTML = html;
}

function selectPresetFromBrowser(idx) {
  closePresetsBrowser();
  // small delay so the close animation finishes before opening the form
  setTimeout(function() {
    openModalWithPreset(idx);
  }, 300);
}

document.addEventListener("DOMContentLoaded", function() {
  if (backdrop) backdrop.addEventListener("click", closeModal);
  if (panel) {
    panel.addEventListener("click", closeModal);
    if (modalInner) modalInner.addEventListener("click", function(e) { e.stopPropagation(); });
  }

  if (settingsBackdrop) settingsBackdrop.addEventListener("click", closeSettings);
  if (settingsPanel) {
    settingsPanel.addEventListener("click", closeSettings);
    if (settingsInner) settingsInner.addEventListener("click", function(e) { e.stopPropagation(); });
  }

  if (presetsBackdrop) presetsBackdrop.addEventListener("click", closePresetsBrowser);
  if (presetsPanel) {
    presetsPanel.addEventListener("click", closePresetsBrowser);
    if (presetsInner) presetsInner.addEventListener("click", function(e) { e.stopPropagation(); });
  }

  const bankBackdrop = document.getElementById("bank-import-backdrop");
  const bankPanel = document.getElementById("bank-import-panel");
  const bankInner = bankPanel ? bankPanel.querySelector("div") : null;

  if (bankBackdrop) bankBackdrop.addEventListener("click", closeBankImport);
  if (bankPanel) {
    bankPanel.addEventListener("click", closeBankImport);
    if (bankInner) bankInner.addEventListener("click", function(e) { e.stopPropagation(); });
  }
});
