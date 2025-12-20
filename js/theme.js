// Theme Management System
// Supports: auto (system), light, dark modes

const THEME_KEY = 'vexly_theme_preference';
const THEME_AUTO = 'auto';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

let currentTheme = THEME_AUTO;
let systemTheme = THEME_LIGHT;

// Initialize theme system
function initTheme() {
  // Load saved preference
  const saved = localStorage.getItem(THEME_KEY);
  currentTheme = saved || THEME_AUTO;

  // Detect system preference
  updateSystemTheme();

  // Apply theme
  applyTheme();

  // Listen for system theme changes
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      updateSystemTheme();
      if (currentTheme === THEME_AUTO) {
        applyTheme();
      }
    });
  }

  // Update UI
  updateThemeUI();
}

// Detect system theme preference
function updateSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    systemTheme = THEME_DARK;
  } else {
    systemTheme = THEME_LIGHT;
  }
}

// Apply theme to document
function applyTheme() {
  const effectiveTheme = currentTheme === THEME_AUTO ? systemTheme : currentTheme;
  
  if (effectiveTheme === THEME_DARK) {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    updateMetaThemeColor('#0f172a'); // Dark background
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.setAttribute('data-theme', 'light');
    updateMetaThemeColor('#6366F1'); // Indigo theme color
  }
}

// Update meta theme-color tag for mobile browsers
function updateMetaThemeColor(color) {
  let meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute('content', color);
  }
}

// Set theme (light, dark, or auto)
function setTheme(theme) {
  if (![THEME_AUTO, THEME_LIGHT, THEME_DARK].includes(theme)) {
    return;
  }

  currentTheme = theme;
  localStorage.setItem(THEME_KEY, theme);
  applyTheme();
  updateThemeUI();
}

// Get current theme setting
function getTheme() {
  return currentTheme;
}

// Get effective theme (resolves auto to light/dark)
function getEffectiveTheme() {
  return currentTheme === THEME_AUTO ? systemTheme : currentTheme;
}

// Update theme toggle UI
function updateThemeUI() {
  const buttons = {
    auto: document.getElementById('theme-auto'),
    light: document.getElementById('theme-light'),
    dark: document.getElementById('theme-dark')
  };

  // Update button states
  Object.keys(buttons).forEach(key => {
    const btn = buttons[key];
    if (btn) {
      if (currentTheme === key) {
        btn.classList.add('active-theme');
        btn.classList.remove('inactive-theme');
      } else {
        btn.classList.remove('active-theme');
        btn.classList.add('inactive-theme');
      }
    }
  });

  // Update theme icon in header (if exists)
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    const effectiveTheme = getEffectiveTheme();
    const icons = {
      light: 'ph:sun-bold',
      dark: 'ph:moon-bold'
    };
    themeIcon.setAttribute('data-icon', icons[effectiveTheme] || icons.light);
  }
}

// Toggle between themes (for quick toggle button)
function toggleTheme() {
  const effectiveTheme = getEffectiveTheme();
  const newTheme = effectiveTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
  setTheme(newTheme);
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}
