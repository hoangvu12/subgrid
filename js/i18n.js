// Lightweight i18n engine for SubGrid

const I18N_STORAGE_KEY = "subgrid_language";
const DEFAULT_LANG = "en";
const SUPPORTED_LANGS = ["en", "th", "es", "zh", "ja", "fr", "de", "ko", "pt", "vi"];

let currentLang = DEFAULT_LANG;

// Initialize i18n system
function initI18n() {
  currentLang = loadLanguage();
  document.documentElement.lang = currentLang;
  return currentLang;
}

// Load saved language preference
function loadLanguage() {
  const saved = localStorage.getItem(I18N_STORAGE_KEY);
  if (saved && SUPPORTED_LANGS.includes(saved)) {
    return saved;
  }

  // Try browser language detection
  // Check navigator.languages first (array of preferred languages)
  const browserLangs = navigator.languages || [navigator.language];

  for (let i = 0; i < browserLangs.length; i++) {
    const lang = browserLangs[i];

    // Try exact match first (e.g., "zh-CN" -> "zh")
    const langCode = lang.split("-")[0].toLowerCase();
    if (SUPPORTED_LANGS.includes(langCode)) {
      return langCode;
    }

    // Special handling for Chinese variants
    if (lang.startsWith("zh")) {
      return "zh"; // We support simplified Chinese
    }
  }

  return DEFAULT_LANG;
}

// Save language preference
function saveLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem(I18N_STORAGE_KEY, lang);
}

// Get current language
function getLang() {
  return currentLang;
}

// Main translation function
function t(key, params) {
  const translations = window.translations || {};
  const langData = translations[currentLang] || translations[DEFAULT_LANG] || {};

  // Support nested keys like "settings.title"
  const keys = key.split(".");
  let value = langData;

  for (let i = 0; i < keys.length; i++) {
    value = value[keys[i]];
    if (value === undefined) {
      // Fallback to English
      value = translations[DEFAULT_LANG];
      for (let j = 0; j < keys.length; j++) {
        value = value ? value[keys[j]] : undefined;
      }
      break;
    }
  }

  // If still not found, return the key as fallback
  if (value === undefined) {
    console.warn("Missing translation:", key);
    return key;
  }

  // Handle interpolation: {{variable}}
  if (params && typeof value === "string") {
    for (const paramKey in params) {
      value = value.replace(new RegExp("\\{\\{" + paramKey + "\\}\\}", "g"), params[paramKey]);
    }
  }

  return value;
}

// Pluralization helper
function tPlural(singularKey, pluralKey, count, params) {
  const key = count === 1 ? singularKey : pluralKey;
  return t(key, { count: count, ...params });
}

// Change language and trigger UI refresh
function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;

  saveLanguage(lang);
  document.documentElement.lang = lang;

  // Trigger full UI re-render
  refreshUI();
}

// Re-render all translatable UI elements
function refreshUI() {
  // Update static HTML elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });

  // Update title attributes
  document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-title");
    el.title = t(key);
  });

  // Re-render dynamic content
  if (typeof renderList === "function") renderList();
  if (typeof renderPresets === "function") renderPresets();

  // Update step indicator
  updateStepIndicator();

  // Re-render current view if on step 2
  if (typeof step !== "undefined" && step === 2 && typeof setView === "function") {
    setView(currentView);
    renderStats();
  }

  // Update CTA description
  updateCtaDescription();
}

function updateCtaDescription() {
  const ctaEl = document.getElementById("cta-description");
  if (!ctaEl) return;

  const appHtml = '<img src="https://www.google.com/s2/favicons?domain=vexly.app&sz=64" alt="Vexly" class="inline-block h-5 w-5 rounded align-text-bottom mr-1" /><span class="font-semibold text-slate-800">Vexly</span>';
  const description = t("cta.description", { app: "{{APP}}", users: "800" });
  ctaEl.innerHTML = description.replace("{{APP}}", appHtml);
}

function updateStepIndicator() {
  const indicator = document.getElementById("step-indicator");
  if (indicator && typeof step !== "undefined") {
    indicator.innerText = t("nav.stepOf", { current: step, total: 3 });
  }
}

// Get available languages for selector
function getAvailableLanguages() {
  const langs = [];
  for (let i = 0; i < SUPPORTED_LANGS.length; i++) {
    const code = SUPPORTED_LANGS[i];
    const meta = window.translations[code]?._meta || {};
    langs.push({
      code: code,
      name: meta.name || code,
      nativeName: meta.nativeName || code
    });
  }
  return langs;
}
