// Dutch translations
window.translations = window.translations || {};
window.translations.nl = {
  _meta: {
    name: "Dutch",
    nativeName: "Nederlands",
    dir: "ltr"
  },

  nav: {
    stepOf: "Stap {{current}} van {{total}}"
  },

  actions: {
    generateGrid: "Genereer raster",
    clearAll: "Alles wissen",
    export: "Exporteren",
    import: "Importeren",
    back: "Terug",
    insights: "Inzichten",
    save: "Opslaan",
    saveChanges: "Wijzigingen opslaan",
    addAnother: "Nog een toevoegen",
    browseAll: "Alles bekijken",
    quickAdd: "Snel toevoegen",
    takeControlNow: "Neem nu de controle",
    tryExample: "Probeer met voorbeeldgegevens",
    neverMissRenewal: "Mis nooit een verlenging"
  },

  subscriptions: {
    addFirst: "Voeg eerste abonnement toe",
    addFirstHint: "Netflix, Spotify, Sportschool, enz.",
    addSubscription: "Abonnement toevoegen",
    editSubscription: "Abonnement bewerken",
    noSubscriptions: "Voeg abonnementen toe om visualisatie te zien",
    deleteAll: "Alle abonnementen verwijderen?",
    subscriptionCount: "{{count}} abonnement",
    subscriptionCountPlural: "{{count}} abonnementen"
  },

  form: {
    website: "Website (optioneel)",
    websitePlaceholder: "netflix.com",
    serviceName: "Servicenaam",
    serviceNamePlaceholder: "bijv. Netflix",
    price: "Prijs",
    pricePlaceholder: "0.00",
    currency: "Valuta",
    cycle: "Cyclus",
    color: "Kleur",
    cycleMonthly: "Maandelijks",
    cycleYearly: "Jaarlijks",
    cycleWeekly: "Wekelijks"
  },

  settings: {
    title: "Instellingen",
    currency: "Valuta",
    currencyHint: "Alle prijzen worden omgerekend met geschatte wisselkoersen",
    importExport: "Importeren & Exporteren",
    importExportHint: "Maak een back-up van uw abonnementen of zet ze over naar een ander apparaat",
    language: "Taal",
    country: "Regio",
    countryHint: "Wijzigt vooraf ingestelde prijzen naar lokale prijzen"
  },

  views: {
    grid: "Raster",
    swarm: "Zwerm",
    bubbles: "Bubbels"
  },

  stats: {
    totalMonth: "Totaal / Maand",
    yearlyProjection: "Jaarlijkse projectie"
  },

  presets: {
    browse: "Abonnementen bekijken",
    search: "Abonnementen zoeken...",
    noResults: "Geen abonnementen gevonden",
    all: "Alle"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Muziek",
    Gaming: "Gaming",
    AI: "AI",
    Productivity: "Productiviteit",
    Cloud: "Cloud",
    Security: "Beveiliging",
    Fitness: "Fitness",
    News: "Nieuws",
    Learning: "Leren"
  },

  bankImport: {
    title: "Bankafschrift importeren",
    uploadHint: "Upload een CSV-bestand geëxporteerd uit uw bank. We detecteren terugkerende transacties die abonnementen kunnen zijn.",
    chooseFile: "Kies CSV-bestand",
    dragDrop: "of sleep en zet neer",
    invalidCsv: "Ongeldig CSV-bestand. Zorg dat het headers en transactiegegevens heeft.",
    foundTransactions: "We hebben {{count}} transacties gevonden. Wijs de kolommen toe:",
    dateColumn: "Datumkolom",
    descriptionColumn: "Omschrijving / Begunstigde kolom",
    amountColumn: "Bedragkolom",
    preview: "Voorbeeld",
    findSubscriptions: "Abonnementen vinden",
    foundPotential: "{{count}} potentiële abonnementen gevonden. Selecteer welke toe te voegen:",
    noRecurring: "Geen terugkerende transacties gevonden",
    tryBrowsing: "Probeer andere transacties hieronder te bekijken",
    didntFind: "Iets niet gevonden?",
    browseOther: "Bekijk {{count}} andere transacties",
    searchTransactions: "Transacties zoeken...",
    noTransactions: "Geen transacties gevonden",
    addSelected: "Geselecteerde toevoegen",
    addCount: "{{count}} abonnement toevoegen",
    addCountPlural: "{{count}} abonnementen toevoegen",
    foundInStatement: "{{count}}x in afschrift",
    addedSuccess: "{{count}} abonnement toegevoegd!",
    addedSuccessPlural: "{{count}} abonnementen toegevoegd!"
  },

  importExport: {
    restoreBackup: "Herstellen van SubGrid back-up",
    previouslyExported: "Eerder geëxporteerd .json-bestand",
    importFromBank: "Importeren van bankafschrift",
    csvFromBank: "CSV-bestand van uw bank",
    importFromCsv: "Abonnementenlijst importeren",
    csvList: "CSV-bestand met uw abonnementen",
    replaceOrMerge: "U heeft {{existing}} bestaande abonnement(en).\n\nKlik OK om ze te vervangen door {{imported}} geïmporteerde abonnement(en).\n\nKlik Annuleren om samen te voegen (geïmporteerde toevoegen aan bestaande).",
    importSuccess: "{{count}} abonnement(en) succesvol geïmporteerd!",
    importFailed: "Importeren mislukt: {{error}}",
    invalidFormat: "Ongeldig bestandsformaat",
    invalidData: "Ongeldige abonnementsgegevens"
  },

  subImport: {
    title: "Abonnementenlijst importeren",
    uploadHint: "Upload een CSV-bestand met uw abonnementen. We helpen u de kolommen toe te wijzen.",
    chooseFile: "Kies CSV-bestand",
    dragDrop: "of sleep en zet neer",
    tipTitle: "Tip: CSV-formaat",
    tipContent: "Uw CSV moet kolommen hebben voor naam, prijs en optioneel factureringscyclus. We detecteren de meeste formaten automatisch!",
    invalidCsv: "Ongeldig CSV-bestand. Zorg dat het headers en datarijen heeft.",
    foundRows: "Gevonden",
    rowsMapColumns: "rijen. Wijs de kolommen toe:",
    nameColumn: "Naamkolom",
    priceColumn: "Prijs / Bedrag kolom",
    cycleColumn: "Cycluskolom (optioneel)",
    preview: "Voorbeeld",
    parseSubscriptions: "Abonnementen verwerken",
    selectColumns: "Selecteer minimaal de Naam en Prijs kolommen.",
    parsedCount: "Verwerkt",
    subscriptionsSelect: "abonnementen. Selecteer welke toe te voegen:",
    noValidSubs: "Geen geldige abonnementen gevonden",
    checkMapping: "Controleer uw kolomtoewijzing",
    addSelected: "Geselecteerde toevoegen",
    addCount: "{{count}} abonnement toevoegen",
    addCountPlural: "{{count}} abonnementen toevoegen",
    addedSuccess: "{{count}} abonnement toegevoegd!",
    addedSuccessPlural: "{{count}} abonnementen toegevoegd!"
  },

  cta: {
    headline1: "Laat je nooit meer verrassen door",
    headline2: "onverwachte kosten",
    description: "{{app}} houdt al uw abonnementen bij op één plek en herinnert u voor elke verlenging. Sluit u aan bij {{users}}+ gebruikers!",
    autoImport: "Importeer automatisch uw"
  },

  export: {
    exporting: "Exporteren...",
    failed: "Exporteren mislukt: {{error}}"
  },

  visualization: {
    monthlyCost: "Maandelijkse kosten"
  },

  hero: {
    headline: "Zie waar uw geld naartoe gaat",
    subheadline: "Visualiseer al uw abonnementen in één mooi raster"
  },

  privacy: {
    badge: "Uw gegevens blijven in uw browser"
  },

  country: {
    welcome: "Welkom!",
    declineButton: "Nee, houd USD",
    changeLater: "U kunt dit later wijzigen in Instellingen"
  }
};
