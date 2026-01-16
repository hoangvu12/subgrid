// Czech translations
window.translations = window.translations || {};
window.translations.cs = {
  _meta: {
    name: "Czech",
    nativeName: "Čeština",
    dir: "ltr"
  },

  nav: {
    stepOf: "Krok {{current}} z {{total}}"
  },

  actions: {
    generateGrid: "Vygenerovat mřížku",
    clearAll: "Vymazat vše",
    export: "Exportovat",
    import: "Importovat",
    back: "Zpět",
    insights: "Přehledy",
    save: "Uložit",
    saveChanges: "Uložit změny",
    addAnother: "Přidat další",
    browseAll: "Procházet vše",
    quickAdd: "Rychlé přidání",
    takeControlNow: "Převezměte kontrolu",
    tryExample: "Vyzkoušet s příkladovými daty",
    neverMissRenewal: "Nikdy nezmeškejte prodloužení"
  },

  subscriptions: {
    addFirst: "Přidejte první předplatné",
    addFirstHint: "Netflix, Spotify, Posilovna atd.",
    addSubscription: "Přidat předplatné",
    editSubscription: "Upravit předplatné",
    noSubscriptions: "Přidejte předplatná pro zobrazení vizualizace",
    deleteAll: "Smazat všechna předplatná?",
    subscriptionCount: "{{count}} předplatné",
    subscriptionCountPlural: "{{count}} předplatných"
  },

  form: {
    website: "Web (volitelné)",
    websitePlaceholder: "netflix.com",
    serviceName: "Název služby",
    serviceNamePlaceholder: "např. Netflix",
    price: "Cena",
    pricePlaceholder: "0.00",
    currency: "Měna",
    cycle: "Cyklus",
    color: "Barva",
    cycleMonthly: "Měsíčně",
    cycleYearly: "Ročně",
    cycleWeekly: "Týdně"
  },

  settings: {
    title: "Nastavení",
    currency: "Měna",
    currencyHint: "Všechny ceny budou převedeny pomocí přibližných směnných kurzů",
    importExport: "Import a export",
    importExportHint: "Zálohujte svá předplatná nebo je přeneste na jiné zařízení",
    language: "Jazyk",
    country: "Region",
    countryHint: "Změní přednastavené ceny na místní ceny"
  },

  views: {
    grid: "Mřížka",
    swarm: "Roj",
    bubbles: "Bubliny"
  },

  stats: {
    totalMonth: "Celkem / Měsíc",
    yearlyProjection: "Roční projekce"
  },

  presets: {
    browse: "Procházet předplatná",
    search: "Hledat předplatná...",
    noResults: "Žádná předplatná nenalezena",
    all: "Vše"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Hudba",
    Gaming: "Hry",
    AI: "AI",
    Productivity: "Produktivita",
    Cloud: "Cloud",
    Security: "Zabezpečení",
    Fitness: "Fitness",
    News: "Zprávy",
    Learning: "Vzdělávání"
  },

  bankImport: {
    title: "Importovat bankovní výpis",
    uploadHint: "Nahrajte CSV soubor exportovaný z vaší banky. Detekujeme opakující se transakce, které mohou být předplatná.",
    chooseFile: "Vybrat CSV soubor",
    dragDrop: "nebo přetáhněte sem",
    invalidCsv: "Neplatný CSV soubor. Ujistěte se, že obsahuje záhlaví a data transakcí.",
    foundTransactions: "Našli jsme {{count}} transakcí. Namapujte sloupce:",
    dateColumn: "Sloupec data",
    descriptionColumn: "Sloupec popisu / příjemce",
    amountColumn: "Sloupec částky",
    preview: "Náhled",
    findSubscriptions: "Najít předplatná",
    foundPotential: "Nalezeno {{count}} potenciálních předplatných. Vyberte, která přidat:",
    noRecurring: "Nebyly nalezeny žádné opakující se transakce",
    tryBrowsing: "Zkuste procházet ostatní transakce níže",
    didntFind: "Nenašli jste něco?",
    browseOther: "Procházet {{count}} dalších transakcí",
    searchTransactions: "Hledat transakce...",
    noTransactions: "Nebyly nalezeny žádné transakce",
    addSelected: "Přidat vybrané",
    addCount: "Přidat {{count}} předplatné",
    addCountPlural: "Přidat {{count}} předplatných",
    foundInStatement: "{{count}}x ve výpisu",
    addedSuccess: "Přidáno {{count}} předplatné!",
    addedSuccessPlural: "Přidáno {{count}} předplatných!"
  },

  importExport: {
    restoreBackup: "Obnovit ze zálohy SubGrid",
    previouslyExported: "Dříve exportovaný soubor .json",
    importFromBank: "Importovat z bankovního výpisu",
    csvFromBank: "CSV soubor z vaší banky",
    importFromCsv: "Importovat seznam předplatných",
    csvList: "CSV soubor s vašimi předplatnými",
    replaceOrMerge: "Máte {{existing}} existujících předplatných.\n\nKlikněte OK pro jejich nahrazení {{imported}} importovanými předplatnými.\n\nKlikněte Zrušit pro sloučení (přidat importovaná k existujícím).",
    importSuccess: "Úspěšně importováno {{count}} předplatných!",
    importFailed: "Import selhal: {{error}}",
    invalidFormat: "Neplatný formát souboru",
    invalidData: "Neplatná data předplatného"
  },

  subImport: {
    title: "Importovat seznam předplatných",
    uploadHint: "Nahrajte CSV soubor s vašimi předplatnými. Pomůžeme vám namapovat sloupce.",
    chooseFile: "Vybrat CSV soubor",
    dragDrop: "nebo přetáhněte sem",
    tipTitle: "Tip: formát CSV",
    tipContent: "Vaše CSV by mělo mít sloupce pro název, cenu a volitelně fakturační cyklus. Automaticky detekujeme většinu formátů!",
    invalidCsv: "Neplatný CSV soubor. Ujistěte se, že obsahuje záhlaví a datové řádky.",
    foundRows: "Nalezeno",
    rowsMapColumns: "řádků. Namapujte sloupce:",
    nameColumn: "Sloupec názvu",
    priceColumn: "Sloupec ceny / částky",
    cycleColumn: "Sloupec cyklu (volitelné)",
    preview: "Náhled",
    parseSubscriptions: "Analyzovat předplatná",
    selectColumns: "Vyberte prosím alespoň sloupce Název a Cena.",
    parsedCount: "Analyzováno",
    subscriptionsSelect: "předplatných. Vyberte, která přidat:",
    noValidSubs: "Nebyly nalezeny žádné platné předplatné",
    checkMapping: "Zkontrolujte mapování sloupců",
    addSelected: "Přidat vybrané",
    addCount: "Přidat {{count}} předplatné",
    addCountPlural: "Přidat {{count}} předplatných",
    addedSuccess: "Přidáno {{count}} předplatné!",
    addedSuccessPlural: "Přidáno {{count}} předplatných!"
  },

  cta: {
    headline1: "Už se nikdy nenechte překvapit",
    headline2: "neočekávanými poplatky",
    description: "{{app}} sleduje všechna vaše předplatná na jednom místě a upomíná vás před každým prodloužením. Připojte se k {{users}}+ uživatelům!",
    autoImport: "Automaticky importovat vaše"
  },

  export: {
    exporting: "Exportování...",
    failed: "Export selhal: {{error}}"
  },

  visualization: {
    monthlyCost: "Měsíční náklady"
  },

  hero: {
    headline: "Podívejte se, kam jdou vaše peníze",
    subheadline: "Vizualizujte všechna svá předplatná v jedné krásné mřížce"
  },

  privacy: {
    badge: "Vaše data zůstávají ve vašem prohlížeči"
  },

  country: {
    welcome: "Vítejte!",
    declineButton: "Ne, ponechat USD",
    changeLater: "Toto můžete později změnit v Nastavení"
  }
};
