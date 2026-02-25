// Romanian translations
window.translations = window.translations || {};
window.translations.ro = {
  _meta: {
    name: "Romanian",
    nativeName: "Română",
    dir: "ltr"
  },

  nav: {
    stepOf: "Pasul {{current}} din {{total}}"
  },

  actions: {
    generateGrid: "Generează grilă",
    clearAll: "Șterge tot",
    export: "Exportă",
    import: "Importă",
    back: "Înapoi",
    insights: "Statistici",
    save: "Salvează",
    saveChanges: "Salvează modificările",
    addAnother: "Adaugă altul",
    browseAll: "Vezi toate",
    quickAdd: "Adăugare rapidă",
    takeControlNow: "Preia controlul acum",
    tryExample: "Încearcă cu date exemplu",
    neverMissRenewal: "Nu rata niciodată o reînnoire"
  },

  subscriptions: {
    addFirst: "Adaugă primul abonament",
    addFirstHint: "Netflix, Spotify, Sală, etc.",
    addSubscription: "Adaugă abonament",
    editSubscription: "Editează abonament",
    noSubscriptions: "Adaugă abonamente pentru a vedea vizualizarea",
    deleteAll: "Ștergi toate abonamentele?",
    subscriptionCount: "{{count}} abonament",
    subscriptionCountPlural: "{{count}} abonamente"
  },

  form: {
    website: "Website (opțional)",
    websitePlaceholder: "netflix.com",
    serviceName: "Nume serviciu",
    serviceNamePlaceholder: "ex. Netflix",
    price: "Preț",
    pricePlaceholder: "0.00",
    currency: "Monedă",
    cycle: "Ciclu",
    color: "Culoare",
    cycleMonthly: "Lunar",
    cycleYearly: "Anual",
    cycleWeekly: "Săptămânal"
  },

  settings: {
    title: "Setări",
    currency: "Monedă",
    currencyHint: "Toate prețurile vor fi convertite folosind cursuri de schimb aproximative",
    importExport: "Import și Export",
    importExportHint: "Fă backup la abonamente sau transferă-le pe alt dispozitiv",
    language: "Limbă",
    country: "Regiune",
    countryHint: "Schimbă prețurile prestabilite la prețuri locale"
  },

  views: {
    grid: "Grilă",
    swarm: "Roi",
    bubbles: "Bule"
  },

  stats: {
    totalMonth: "Total / Lună",
    yearlyProjection: "Proiecție anuală"
  },

  presets: {
    browse: "Răsfoiește abonamente",
    search: "Caută abonamente...",
    noResults: "Nu s-au găsit abonamente",
    all: "Toate"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Muzică",
    Gaming: "Jocuri",
    AI: "AI",
    Productivity: "Productivitate",
    Cloud: "Cloud",
    Security: "Securitate",
    Fitness: "Fitness",
    News: "Știri",
    Learning: "Învățare"
  },

  bankImport: {
    title: "Importă extras de cont",
    uploadHint: "Încarcă un fișier CSV exportat din banca ta. Vom detecta tranzacțiile recurente care ar putea fi abonamente.",
    chooseFile: "Alege fișier CSV",
    dragDrop: "sau trage și plasează",
    invalidCsv: "Fișier CSV invalid. Asigură-te că are anteturi și date de tranzacții.",
    foundTransactions: "Am găsit {{count}} tranzacții. Mapează coloanele:",
    dateColumn: "Coloana dată",
    descriptionColumn: "Coloana descriere / beneficiar",
    amountColumn: "Coloana sumă",
    preview: "Previzualizare",
    findSubscriptions: "Găsește abonamente",
    foundPotential: "S-au găsit {{count}} abonamente potențiale. Selectează pe care să le adaugi:",
    noRecurring: "Nu s-au găsit tranzacții recurente",
    tryBrowsing: "Încearcă să răsfoiești alte tranzacții mai jos",
    didntFind: "Nu ai găsit ceva?",
    browseOther: "Răsfoiește {{count}} alte tranzacții",
    searchTransactions: "Caută tranzacții...",
    noTransactions: "Nu s-au găsit tranzacții",
    addSelected: "Adaugă selectate",
    addCount: "Adaugă {{count}} abonament",
    addCountPlural: "Adaugă {{count}} abonamente",
    foundInStatement: "{{count}}x în extras",
    addedSuccess: "S-a adăugat {{count}} abonament!",
    addedSuccessPlural: "S-au adăugat {{count}} abonamente!"
  },

  importExport: {
    restoreBackup: "Restaurează din backup SubGrid",
    previouslyExported: "Fișier .json exportat anterior",
    importFromBank: "Importă din extras de cont",
    csvFromBank: "Fișier CSV de la banca ta",
    importFromCsv: "Importă lista de abonamente",
    csvList: "Fișier CSV cu abonamentele tale",
    replaceOrMerge: "Ai {{existing}} abonament(e) existente.\n\nApasă OK pentru a le înlocui cu {{imported}} abonament(e) importate.\n\nApasă Anulează pentru a îmbina (adaugă importate la existente).",
    importSuccess: "S-au importat cu succes {{count}} abonament(e)!",
    importFailed: "Importul a eșuat: {{error}}",
    invalidFormat: "Format de fișier invalid",
    invalidData: "Date de abonament invalide"
  },

  subImport: {
    title: "Importă lista de abonamente",
    uploadHint: "Încarcă un fișier CSV cu abonamentele tale. Te vom ajuta să mapezi coloanele.",
    chooseFile: "Alege fișier CSV",
    dragDrop: "sau trage și plasează",
    tipTitle: "Sfat: format CSV",
    tipContent: "CSV-ul tău ar trebui să aibă coloane pentru nume, preț și opțional ciclu de facturare. Vom detecta automat cele mai multe formate!",
    invalidCsv: "Fișier CSV invalid. Asigură-te că are anteturi și rânduri de date.",
    foundRows: "S-au găsit",
    rowsMapColumns: "rânduri. Mapează coloanele:",
    nameColumn: "Coloana nume",
    priceColumn: "Coloana preț / sumă",
    cycleColumn: "Coloana ciclu (opțional)",
    preview: "Previzualizare",
    parseSubscriptions: "Procesează abonamente",
    selectColumns: "Te rugăm să selectezi cel puțin coloanele Nume și Preț.",
    parsedCount: "S-au procesat",
    subscriptionsSelect: "abonamente. Selectează pe care să le adaugi:",
    noValidSubs: "Nu s-au găsit abonamente valide",
    checkMapping: "Verifică maparea coloanelor",
    addSelected: "Adaugă selectate",
    addCount: "Adaugă {{count}} abonament",
    addCountPlural: "Adaugă {{count}} abonamente",
    addedSuccess: "S-a adăugat {{count}} abonament!",
    addedSuccessPlural: "S-au adăugat {{count}} abonamente!"
  },

  cta: {
    headline1: "Nu mai fi niciodată surprins de",
    headline2: "taxe neașteptate",
    description: "{{app}} urmărește toate abonamentele tale într-un singur loc și te anunță înainte de fiecare reînnoire. Alătură-te celor {{users}}+ utilizatori acum!",
    autoImport: "Importă automat"
  },

  export: {
    exporting: "Se exportă...",
    failed: "Exportul a eșuat: {{error}}"
  },

  visualization: {
    monthlyCost: "Cost lunar"
  },

  hero: {
    headline: "Vezi unde se duc banii tăi",
    subheadline: "Vizualizează toate abonamentele într-o grilă frumoasă"
  },

  privacy: {
    badge: "Datele tale rămân în browser"
  },

  country: {
    welcome: "Bine ai venit!",
    declineButton: "Nu, păstrează USD",
    changeLater: "Poți schimba asta mai târziu în Setări"
  }
};
