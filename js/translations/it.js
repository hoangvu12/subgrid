// Italian translations
window.translations = window.translations || {};
window.translations.it = {
  _meta: {
    name: "Italian",
    nativeName: "Italiano",
    dir: "ltr"
  },

  nav: {
    stepOf: "Passo {{current}} di {{total}}"
  },

  actions: {
    generateGrid: "Genera griglia",
    clearAll: "Cancella tutto",
    export: "Esporta",
    import: "Importa",
    back: "Indietro",
    insights: "Approfondimenti",
    save: "Salva",
    saveChanges: "Salva modifiche",
    addAnother: "Aggiungi un altro",
    browseAll: "Sfoglia tutto",
    quickAdd: "Aggiungi veloce",
    takeControlNow: "Prendi il controllo ora",
    tryExample: "Prova con dati di esempio",
    neverMissRenewal: "Non perdere mai un rinnovo"
  },

  subscriptions: {
    addFirst: "Aggiungi il primo abbonamento",
    addFirstHint: "Netflix, Spotify, Palestra, ecc.",
    addSubscription: "Aggiungi abbonamento",
    editSubscription: "Modifica abbonamento",
    noSubscriptions: "Aggiungi abbonamenti per vedere la visualizzazione",
    deleteAll: "Eliminare tutti gli abbonamenti?",
    subscriptionCount: "{{count}} abbonamento",
    subscriptionCountPlural: "{{count}} abbonamenti"
  },

  form: {
    website: "Sito web (opzionale)",
    websitePlaceholder: "netflix.com",
    serviceName: "Nome servizio",
    serviceNamePlaceholder: "es. Netflix",
    price: "Prezzo",
    pricePlaceholder: "0.00",
    currency: "Valuta",
    cycle: "Ciclo",
    color: "Colore",
    cycleMonthly: "Mensile",
    cycleYearly: "Annuale",
    cycleWeekly: "Settimanale"
  },

  settings: {
    title: "Impostazioni",
    currency: "Valuta",
    currencyHint: "Tutti i prezzi saranno convertiti utilizzando tassi di cambio approssimativi",
    importExport: "Importa ed Esporta",
    importExportHint: "Backup dei tuoi abbonamenti o trasferiscili su un altro dispositivo",
    language: "Lingua",
    country: "Regione",
    countryHint: "Cambia i prezzi preimpostati ai prezzi locali"
  },

  views: {
    grid: "Griglia",
    swarm: "Sciame",
    bubbles: "Bolle"
  },

  stats: {
    totalMonth: "Totale / Mese",
    yearlyProjection: "Proiezione annuale"
  },

  presets: {
    browse: "Sfoglia abbonamenti",
    search: "Cerca abbonamenti...",
    noResults: "Nessun abbonamento trovato",
    all: "Tutti"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Musica",
    Gaming: "Gaming",
    AI: "AI",
    Productivity: "Produttività",
    Cloud: "Cloud",
    Security: "Sicurezza",
    Fitness: "Fitness",
    News: "Notizie",
    Learning: "Apprendimento"
  },

  bankImport: {
    title: "Importa estratto conto",
    uploadHint: "Carica un file CSV esportato dalla tua banca. Rileveremo le transazioni ricorrenti che potrebbero essere abbonamenti.",
    chooseFile: "Scegli file CSV",
    dragDrop: "o trascina e rilascia",
    invalidCsv: "File CSV non valido. Assicurati che abbia intestazioni e dati delle transazioni.",
    foundTransactions: "Abbiamo trovato {{count}} transazioni. Mappa le colonne:",
    dateColumn: "Colonna data",
    descriptionColumn: "Colonna descrizione / beneficiario",
    amountColumn: "Colonna importo",
    preview: "Anteprima",
    findSubscriptions: "Trova abbonamenti",
    foundPotential: "Trovati {{count}} potenziali abbonamenti. Seleziona quali aggiungere:",
    noRecurring: "Nessuna transazione ricorrente trovata",
    tryBrowsing: "Prova a sfogliare altre transazioni qui sotto",
    didntFind: "Non hai trovato qualcosa?",
    browseOther: "Sfoglia {{count}} altre transazioni",
    searchTransactions: "Cerca transazioni...",
    noTransactions: "Nessuna transazione trovata",
    addSelected: "Aggiungi selezionati",
    addCount: "Aggiungi {{count}} abbonamento",
    addCountPlural: "Aggiungi {{count}} abbonamenti",
    foundInStatement: "{{count}}x nell'estratto",
    addedSuccess: "Aggiunto {{count}} abbonamento!",
    addedSuccessPlural: "Aggiunti {{count}} abbonamenti!"
  },

  importExport: {
    restoreBackup: "Ripristina da backup SubGrid",
    previouslyExported: "File .json precedentemente esportato",
    importFromBank: "Importa da estratto conto",
    csvFromBank: "File CSV dalla tua banca",
    importFromCsv: "Importa lista abbonamenti",
    csvList: "File CSV con i tuoi abbonamenti",
    replaceOrMerge: "Hai {{existing}} abbonamento/i esistente/i.\n\nClicca OK per sostituirli con {{imported}} abbonamento/i importato/i.\n\nClicca Annulla per unire (aggiungere gli importati agli esistenti).",
    importSuccess: "{{count}} abbonamento/i importato/i con successo!",
    importFailed: "Importazione fallita: {{error}}",
    invalidFormat: "Formato file non valido",
    invalidData: "Dati abbonamento non validi"
  },

  subImport: {
    title: "Importa lista abbonamenti",
    uploadHint: "Carica un file CSV con i tuoi abbonamenti. Ti aiuteremo a mappare le colonne.",
    chooseFile: "Scegli file CSV",
    dragDrop: "o trascina e rilascia",
    tipTitle: "Suggerimento: formato CSV",
    tipContent: "Il tuo CSV dovrebbe avere colonne per nome, prezzo e opzionalmente ciclo di fatturazione. Rileveremo automaticamente la maggior parte dei formati!",
    invalidCsv: "File CSV non valido. Assicurati che abbia intestazioni e righe di dati.",
    foundRows: "Trovate",
    rowsMapColumns: "righe. Mappa le colonne:",
    nameColumn: "Colonna nome",
    priceColumn: "Colonna prezzo / importo",
    cycleColumn: "Colonna ciclo (opzionale)",
    preview: "Anteprima",
    parseSubscriptions: "Analizza abbonamenti",
    selectColumns: "Seleziona almeno le colonne Nome e Prezzo.",
    parsedCount: "Analizzati",
    subscriptionsSelect: "abbonamenti. Seleziona quali aggiungere:",
    noValidSubs: "Nessun abbonamento valido trovato",
    checkMapping: "Controlla la mappatura delle colonne",
    addSelected: "Aggiungi selezionati",
    addCount: "Aggiungi {{count}} abbonamento",
    addCountPlural: "Aggiungi {{count}} abbonamenti",
    addedSuccess: "Aggiunto {{count}} abbonamento!",
    addedSuccessPlural: "Aggiunti {{count}} abbonamenti!"
  },

  cta: {
    headline1: "Non farti mai più sorprendere da",
    headline2: "addebiti imprevisti",
    description: "{{app}} traccia tutti i tuoi abbonamenti in un unico posto e ti ricorda prima di ogni rinnovo. Unisciti a {{users}}+ utenti ora!",
    autoImport: "Importa automaticamente i tuoi"
  },

  export: {
    exporting: "Esportazione...",
    failed: "Esportazione fallita: {{error}}"
  },

  visualization: {
    monthlyCost: "Costo mensile"
  },

  hero: {
    headline: "Vedi dove vanno i tuoi soldi",
    subheadline: "Visualizza tutti i tuoi abbonamenti in una bella griglia"
  },

  privacy: {
    badge: "I tuoi dati rimangono nel tuo browser"
  },

  country: {
    welcome: "Benvenuto!",
    declineButton: "No, mantieni USD",
    changeLater: "Puoi cambiarlo in seguito nelle Impostazioni"
  }
};
