// German translations
window.translations = window.translations || {};
window.translations.de = {
  _meta: {
    name: "German",
    nativeName: "Deutsch",
    dir: "ltr"
  },

  nav: {
    stepOf: "{{current}} / {{total}}"
  },

  actions: {
    generateGrid: "Raster erstellen",
    clearAll: "Alles löschen",
    export: "Exportieren",
    import: "Importieren",
    back: "Zurück",
    insights: "Analyse",
    save: "Speichern",
    saveChanges: "Speichern",
    addAnother: "Weiteres hinzufügen",
    browseAll: "Alle anzeigen",
    quickAdd: "Schnell hinzufügen",
    takeControlNow: "Jetzt starten",
    tryExample: "Mit Beispieldaten testen",
    neverMissRenewal: "Keine Verlängerung verpassen"
  },

  subscriptions: {
    addFirst: "Füge dein erstes Abo hinzu",
    addFirstHint: "Netflix, Spotify, Fitnessstudio...",
    addSubscription: "Abo hinzufügen",
    editSubscription: "Bearbeiten",
    noSubscriptions: "Füge Abos hinzu, um die Grafik zu sehen",
    deleteAll: "Alles löschen?",
    subscriptionCount: "{{count}} Abo",
    subscriptionCountPlural: "{{count}} Abos"
  },

  form: {
    website: "Website (optional)",
    websitePlaceholder: "netflix.com",
    serviceName: "Name des Dienstes",
    serviceNamePlaceholder: "z.B. Netflix",
    price: "Preis",
    pricePlaceholder: "0.00",
    currency: "Währung",
    cycle: "Zahlungsintervall",
    color: "Farbe",
    cycleMonthly: "Monatlich",
    cycleYearly: "Jährlich",
    cycleWeekly: "Wöchentlich"
  },

  settings: {
    title: "Einstellungen",
    currency: "Währung",
    currencyHint: "Preise werden mit ungefähren Wechselkursen umgerechnet",
    importExport: "Import & Export",
    importExportHint: "Sichere deine Daten oder übertrage sie auf ein anderes Gerät",
    language: "Sprache"
  },

  views: {
    grid: "Raster",
    swarm: "Schwarm",
    bubbles: "Blasen"
  },

  stats: {
    totalMonth: "Gesamt / Monat",
    yearlyProjection: "Jahresschätzung"
  },

  presets: {
    browse: "Aus Liste wählen",
    search: "Dienst suchen...",
    noResults: "Nichts gefunden",
    all: "Alle"
  },

  categories: {
    Streaming: "Video-Streaming",
    Music: "Musik",
    Gaming: "Gaming",
    AI: "KI",
    Productivity: "Produktivität",
    Cloud: "Cloud",
    Security: "Sicherheit",
    Fitness: "Fitness",
    News: "Nachrichten",
    Learning: "Bildung"
  },

  bankImport: {
    title: "Aus Kontoauszug importieren",
    uploadHint: "Lade eine CSV-Datei deiner Bank hoch. Wiederkehrende Zahlungen werden automatisch erkannt.",
    chooseFile: "CSV-Datei auswählen",
    dragDrop: "oder hierher ziehen",
    invalidCsv: "Die CSV-Datei konnte nicht gelesen werden. Überprüfe das Format.",
    foundTransactions: "{{count}} Transaktionen gefunden. Ordne die Spalten zu:",
    dateColumn: "Datumsspalte",
    descriptionColumn: "Beschreibung/Empfänger",
    amountColumn: "Betragsspalte",
    preview: "Vorschau",
    findSubscriptions: "Abos finden",
    foundPotential: "{{count}} mögliche Abos gefunden. Wähle aus, welche hinzugefügt werden sollen:",
    noRecurring: "Keine wiederkehrenden Zahlungen gefunden",
    tryBrowsing: "Schau dir auch die anderen Transaktionen unten an",
    didntFind: "Nicht gefunden?",
    browseOther: "{{count}} weitere Transaktionen anzeigen",
    searchTransactions: "Transaktionen suchen...",
    noTransactions: "Keine Transaktionen",
    addSelected: "Auswahl hinzufügen",
    addCount: "{{count}} Abo hinzufügen",
    addCountPlural: "{{count}} Abos hinzufügen",
    foundInStatement: "{{count}}× gefunden",
    addedSuccess: "{{count}} Abo hinzugefügt!",
    addedSuccessPlural: "{{count}} Abos hinzugefügt!"
  },

  importExport: {
    restoreBackup: "Aus Backup wiederherstellen",
    previouslyExported: "Zuvor exportierte JSON-Datei",
    importFromBank: "Aus Kontoauszug importieren",
    csvFromBank: "CSV-Datei deiner Bank",
    replaceOrMerge: "Du hast {{existing}} Abos.\n\nOK: Mit {{imported}} importierten Abos ersetzen.\nAbbrechen: Zusammenführen (zu bestehenden hinzufügen).",
    importSuccess: "{{count}} Abo(s) importiert!",
    importFailed: "Import fehlgeschlagen: {{error}}",
    invalidFormat: "Dateiformat nicht erkannt",
    invalidData: "Daten konnten nicht gelesen werden"
  },

  cta: {
    headline1: "Schluss mit vergessenen",
    headline2: "Abo-Verlängerungen",
    description: "{{app}} behält alle deine Abos im Blick und erinnert dich vor jeder Verlängerung. Schon {{users}}+ Nutzer dabei!",
    autoImport: "Automatisch importieren"
  },

  export: {
    exporting: "Wird exportiert...",
    failed: "Export fehlgeschlagen: {{error}}"
  },

  visualization: {
    monthlyCost: "Monatliche Kosten"
  },

  hero: {
    headline: "Sieh, wohin dein Geld fließt",
    subheadline: "Visualisiere alle deine Abos in einem schönen Raster"
  },

  privacy: {
    badge: "Deine Daten bleiben in deinem Browser"
  }
};
