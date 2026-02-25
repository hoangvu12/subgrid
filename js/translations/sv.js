// Swedish translations
window.translations = window.translations || {};
window.translations.sv = {
  _meta: {
    name: "Swedish",
    nativeName: "Svenska",
    dir: "ltr"
  },

  nav: {
    stepOf: "Steg {{current}} av {{total}}"
  },

  actions: {
    generateGrid: "Generera rutnät",
    clearAll: "Rensa allt",
    export: "Exportera",
    import: "Importera",
    back: "Tillbaka",
    insights: "Insikter",
    save: "Spara",
    saveChanges: "Spara ändringar",
    addAnother: "Lägg till en till",
    browseAll: "Bläddra alla",
    quickAdd: "Snabbtillägg",
    takeControlNow: "Ta kontroll nu",
    tryExample: "Prova med exempeldata",
    neverMissRenewal: "Missa aldrig en förnyelse"
  },

  subscriptions: {
    addFirst: "Lägg till första prenumerationen",
    addFirstHint: "Netflix, Spotify, Gym, osv.",
    addSubscription: "Lägg till prenumeration",
    editSubscription: "Redigera prenumeration",
    noSubscriptions: "Lägg till prenumerationer för att se visualisering",
    deleteAll: "Ta bort alla prenumerationer?",
    subscriptionCount: "{{count}} prenumeration",
    subscriptionCountPlural: "{{count}} prenumerationer"
  },

  form: {
    website: "Webbplats (valfritt)",
    websitePlaceholder: "netflix.com",
    serviceName: "Tjänstens namn",
    serviceNamePlaceholder: "t.ex. Netflix",
    price: "Pris",
    pricePlaceholder: "0.00",
    currency: "Valuta",
    cycle: "Cykel",
    color: "Färg",
    cycleMonthly: "Månadsvis",
    cycleYearly: "Årsvis",
    cycleWeekly: "Veckovis"
  },

  settings: {
    title: "Inställningar",
    currency: "Valuta",
    currencyHint: "Alla priser konverteras med ungefärliga växelkurser",
    importExport: "Importera & Exportera",
    importExportHint: "Säkerhetskopiera dina prenumerationer eller överför dem till en annan enhet",
    language: "Språk",
    country: "Region",
    countryHint: "Ändrar förvalda priser till lokala priser"
  },

  views: {
    grid: "Rutnät",
    swarm: "Svärm",
    bubbles: "Bubblor"
  },

  stats: {
    totalMonth: "Totalt / Månad",
    yearlyProjection: "Årlig projektion"
  },

  presets: {
    browse: "Bläddra prenumerationer",
    search: "Sök prenumerationer...",
    noResults: "Inga prenumerationer hittades",
    all: "Alla"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Musik",
    Gaming: "Spel",
    AI: "AI",
    Productivity: "Produktivitet",
    Cloud: "Moln",
    Security: "Säkerhet",
    Fitness: "Fitness",
    News: "Nyheter",
    Learning: "Lärande"
  },

  bankImport: {
    title: "Importera kontoutdrag",
    uploadHint: "Ladda upp en CSV-fil exporterad från din bank. Vi upptäcker återkommande transaktioner som kan vara prenumerationer.",
    chooseFile: "Välj CSV-fil",
    dragDrop: "eller dra och släpp",
    invalidCsv: "Ogiltig CSV-fil. Se till att den har rubriker och transaktionsdata.",
    foundTransactions: "Vi hittade {{count}} transaktioner. Mappa kolumnerna:",
    dateColumn: "Datumkolumn",
    descriptionColumn: "Beskrivning / Mottagare kolumn",
    amountColumn: "Beloppskolumn",
    preview: "Förhandsvisning",
    findSubscriptions: "Hitta prenumerationer",
    foundPotential: "Hittade {{count}} potentiella prenumerationer. Välj vilka som ska läggas till:",
    noRecurring: "Inga återkommande transaktioner hittades",
    tryBrowsing: "Prova att bläddra bland andra transaktioner nedan",
    didntFind: "Hittade du inte något?",
    browseOther: "Bläddra {{count}} andra transaktioner",
    searchTransactions: "Sök transaktioner...",
    noTransactions: "Inga transaktioner hittades",
    addSelected: "Lägg till valda",
    addCount: "Lägg till {{count}} prenumeration",
    addCountPlural: "Lägg till {{count}} prenumerationer",
    foundInStatement: "{{count}}x i utdraget",
    addedSuccess: "Lade till {{count}} prenumeration!",
    addedSuccessPlural: "Lade till {{count}} prenumerationer!"
  },

  importExport: {
    restoreBackup: "Återställ från SubGrid-säkerhetskopia",
    previouslyExported: "Tidigare exporterad .json-fil",
    importFromBank: "Importera från kontoutdrag",
    csvFromBank: "CSV-fil från din bank",
    importFromCsv: "Importera prenumerationslista",
    csvList: "CSV-fil med dina prenumerationer",
    replaceOrMerge: "Du har {{existing}} befintliga prenumeration(er).\n\nKlicka OK för att ersätta dem med {{imported}} importerade prenumeration(er).\n\nKlicka Avbryt för att slå ihop (lägg till importerade till befintliga).",
    importSuccess: "Importerade {{count}} prenumeration(er) framgångsrikt!",
    importFailed: "Import misslyckades: {{error}}",
    invalidFormat: "Ogiltigt filformat",
    invalidData: "Ogiltig prenumerationsdata"
  },

  subImport: {
    title: "Importera prenumerationslista",
    uploadHint: "Ladda upp en CSV-fil med dina prenumerationer. Vi hjälper dig att mappa kolumnerna.",
    chooseFile: "Välj CSV-fil",
    dragDrop: "eller dra och släpp",
    tipTitle: "Tips: CSV-format",
    tipContent: "Din CSV bör ha kolumner för namn, pris och eventuellt faktureringscykel. Vi upptäcker de flesta format automatiskt!",
    invalidCsv: "Ogiltig CSV-fil. Se till att den har rubriker och datarader.",
    foundRows: "Hittade",
    rowsMapColumns: "rader. Mappa kolumnerna:",
    nameColumn: "Namnkolumn",
    priceColumn: "Pris / Belopp kolumn",
    cycleColumn: "Cykelkolumn (valfritt)",
    preview: "Förhandsvisning",
    parseSubscriptions: "Analysera prenumerationer",
    selectColumns: "Välj minst kolumnerna Namn och Pris.",
    parsedCount: "Analyserade",
    subscriptionsSelect: "prenumerationer. Välj vilka som ska läggas till:",
    noValidSubs: "Inga giltiga prenumerationer hittades",
    checkMapping: "Kontrollera din kolumnmappning",
    addSelected: "Lägg till valda",
    addCount: "Lägg till {{count}} prenumeration",
    addCountPlural: "Lägg till {{count}} prenumerationer",
    addedSuccess: "Lade till {{count}} prenumeration!",
    addedSuccessPlural: "Lade till {{count}} prenumerationer!"
  },

  cta: {
    headline1: "Bli aldrig överraskad av",
    headline2: "oväntade avgifter igen",
    description: "{{app}} spårar alla dina prenumerationer på ett ställe och påminner dig före varje förnyelse. Gå med {{users}}+ användare nu!",
    autoImport: "Importera automatiskt dina"
  },

  export: {
    exporting: "Exporterar...",
    failed: "Export misslyckades: {{error}}"
  },

  visualization: {
    monthlyCost: "Månadskostnad"
  },

  hero: {
    headline: "Se vart dina pengar går",
    subheadline: "Visualisera alla dina prenumerationer i ett vackert rutnät"
  },

  privacy: {
    badge: "Din data stannar i din webbläsare"
  },

  country: {
    welcome: "Välkommen!",
    declineButton: "Nej, behåll USD",
    changeLater: "Du kan ändra detta senare i Inställningar"
  }
};
