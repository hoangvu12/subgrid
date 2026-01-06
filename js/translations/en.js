// English translations (default)
window.translations = window.translations || {};
window.translations.en = {
  _meta: {
    name: "English",
    nativeName: "English",
    dir: "ltr"
  },

  nav: {
    stepOf: "Step {{current}} of {{total}}"
  },

  actions: {
    generateGrid: "Generate Grid",
    clearAll: "Clear All",
    export: "Export",
    import: "Import",
    back: "Back",
    insights: "Insights",
    save: "Save Item",
    saveChanges: "Save Changes",
    addAnother: "Add Another",
    browseAll: "Browse all",
    quickAdd: "Quick Add",
    takeControlNow: "Take control now",
    tryExample: "Try with example data",
    neverMissRenewal: "Never miss a renewal"
  },

  subscriptions: {
    addFirst: "Add first subscription",
    addFirstHint: "Netflix, Spotify, Gym, etc.",
    addSubscription: "Add Subscription",
    editSubscription: "Edit Subscription",
    noSubscriptions: "Add subscriptions to see visualization",
    deleteAll: "Delete all subscriptions?",
    subscriptionCount: "{{count}} subscription",
    subscriptionCountPlural: "{{count}} subscriptions"
  },

  form: {
    website: "Website (Optional)",
    websitePlaceholder: "netflix.com",
    serviceName: "Service Name",
    serviceNamePlaceholder: "e.g. Netflix",
    price: "Price",
    pricePlaceholder: "0.00",
    currency: "Currency",
    cycle: "Cycle",
    color: "Color",
    cycleMonthly: "Monthly",
    cycleYearly: "Yearly",
    cycleWeekly: "Weekly"
  },

  settings: {
    title: "Settings",
    currency: "Currency",
    currencyHint: "All prices will be converted using approximate exchange rates",
    importExport: "Import & Export",
    importExportHint: "Backup your subscriptions or transfer them to another device",
    language: "Language"
  },

  views: {
    grid: "Grid",
    swarm: "Swarm",
    bubbles: "Bubbles"
  },

  stats: {
    totalMonth: "Total / Month",
    yearlyProjection: "Yearly Projection"
  },

  presets: {
    browse: "Browse Subscriptions",
    search: "Search subscriptions...",
    noResults: "No subscriptions found",
    all: "All"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Music",
    Gaming: "Gaming",
    AI: "AI",
    Productivity: "Productivity",
    Cloud: "Cloud",
    Security: "Security",
    Fitness: "Fitness",
    News: "News",
    Learning: "Learning"
  },

  bankImport: {
    title: "Import Bank Statement",
    uploadHint: "Upload a CSV file exported from your bank. We'll detect recurring transactions that might be subscriptions.",
    chooseFile: "Choose CSV file",
    dragDrop: "or drag and drop",
    invalidCsv: "Invalid CSV file. Make sure it has headers and transaction data.",
    foundTransactions: "We found {{count}} transactions. Map the columns:",
    dateColumn: "Date Column",
    descriptionColumn: "Description / Payee Column",
    amountColumn: "Amount Column",
    preview: "Preview",
    findSubscriptions: "Find Subscriptions",
    foundPotential: "Found {{count}} potential subscriptions. Select which ones to add:",
    noRecurring: "No recurring transactions found",
    tryBrowsing: "Try browsing other transactions below",
    didntFind: "Didn't find something?",
    browseOther: "Browse {{count}} other transactions",
    searchTransactions: "Search transactions...",
    noTransactions: "No transactions found",
    addSelected: "Add Selected",
    addCount: "Add {{count}} Subscription",
    addCountPlural: "Add {{count}} Subscriptions",
    foundInStatement: "{{count}}x in statement",
    addedSuccess: "Added {{count}} subscription!",
    addedSuccessPlural: "Added {{count}} subscriptions!"
  },

  importExport: {
    restoreBackup: "Restore from SubGrid backup",
    previouslyExported: "Previously exported .json file",
    importFromBank: "Import from bank statement",
    csvFromBank: "CSV file from your bank",
    replaceOrMerge: "You have {{existing}} existing subscription(s).\n\nClick OK to replace them with {{imported}} imported subscription(s).\n\nClick Cancel to merge (add imported to existing).",
    importSuccess: "Successfully imported {{count}} subscription(s)!",
    importFailed: "Failed to import: {{error}}",
    invalidFormat: "Invalid file format",
    invalidData: "Invalid subscription data"
  },

  cta: {
    headline1: "Never get surprised by",
    headline2: "unexpected charges again",
    description: "{{app}} tracks all your subscriptions in one place and reminds you before each renewal. Join {{users}}+ users now!",
    autoImport: "Automatically import your"
  },

  export: {
    exporting: "Exporting...",
    failed: "Export failed: {{error}}"
  },

  visualization: {
    monthlyCost: "Monthly Cost"
  },

  hero: {
    headline: "See where your money goes",
    subheadline: "Visualize all your subscriptions in one beautiful grid"
  },

  privacy: {
    badge: "Your data stays in your browser"
  }
};
