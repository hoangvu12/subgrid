// French translations
window.translations = window.translations || {};
window.translations.fr = {
  _meta: {
    name: "French",
    nativeName: "Français",
    dir: "ltr"
  },

  nav: {
    stepOf: "{{current}} / {{total}}"
  },

  actions: {
    generateGrid: "Créer la grille",
    clearAll: "Tout effacer",
    export: "Exporter",
    import: "Importer",
    back: "Retour",
    insights: "Analyse",
    save: "Enregistrer",
    saveChanges: "Enregistrer",
    addAnother: "Ajouter un autre",
    browseAll: "Tout voir",
    quickAdd: "Ajout rapide",
    takeControlNow: "Commencer",
    tryExample: "Essayer avec des exemples",
    neverMissRenewal: "Ne ratez plus un renouvellement"
  },

  subscriptions: {
    addFirst: "Ajoutez votre premier abonnement",
    addFirstHint: "Netflix, Spotify, salle de sport...",
    addSubscription: "Ajouter un abonnement",
    editSubscription: "Modifier",
    noSubscriptions: "Ajoutez des abonnements pour voir le graphique",
    deleteAll: "Tout supprimer ?",
    subscriptionCount: "{{count}} abonnement",
    subscriptionCountPlural: "{{count}} abonnements"
  },

  form: {
    website: "Site web (facultatif)",
    websitePlaceholder: "netflix.com",
    serviceName: "Nom du service",
    serviceNamePlaceholder: "ex: Netflix",
    price: "Prix",
    pricePlaceholder: "0.00",
    currency: "Devise",
    cycle: "Fréquence",
    color: "Couleur",
    cycleMonthly: "Mensuel",
    cycleYearly: "Annuel",
    cycleWeekly: "Hebdomadaire"
  },

  settings: {
    title: "Paramètres",
    currency: "Devise",
    currencyHint: "Les prix seront convertis selon les taux de change approximatifs",
    importExport: "Import & Export",
    importExportHint: "Sauvegardez vos données ou transférez-les vers un autre appareil",
    language: "Langue"
  },

  views: {
    grid: "Grille",
    swarm: "Nuage",
    bubbles: "Bulles"
  },

  stats: {
    totalMonth: "Total / mois",
    yearlyProjection: "Estimation annuelle"
  },

  presets: {
    browse: "Choisir dans la liste",
    search: "Rechercher un service...",
    noResults: "Aucun résultat",
    all: "Tous"
  },

  categories: {
    Streaming: "Vidéo",
    Music: "Musique",
    Gaming: "Jeux",
    AI: "IA",
    Productivity: "Productivité",
    Cloud: "Cloud",
    Security: "Sécurité",
    Fitness: "Sport",
    News: "Actualités",
    Learning: "Formation"
  },

  bankImport: {
    title: "Importer depuis votre banque",
    uploadHint: "Importez un fichier CSV de votre banque. On détectera automatiquement les paiements récurrents.",
    chooseFile: "Choisir un fichier CSV",
    dragDrop: "ou glissez-déposez ici",
    invalidCsv: "Impossible de lire ce fichier CSV. Vérifiez qu'il est au bon format.",
    foundTransactions: "{{count}} transactions trouvées. Sélectionnez les colonnes correspondantes :",
    dateColumn: "Colonne date",
    descriptionColumn: "Colonne description/bénéficiaire",
    amountColumn: "Colonne montant",
    preview: "Aperçu",
    findSubscriptions: "Trouver les abonnements",
    foundPotential: "{{count}} abonnements potentiels trouvés. Sélectionnez ceux à ajouter :",
    noRecurring: "Aucun paiement récurrent trouvé",
    tryBrowsing: "Essayez de parcourir les autres transactions ci-dessous",
    didntFind: "Pas trouvé ?",
    browseOther: "Voir {{count}} autres transactions",
    searchTransactions: "Rechercher...",
    noTransactions: "Aucune transaction",
    addSelected: "Ajouter la sélection",
    addCount: "Ajouter {{count}} abonnement",
    addCountPlural: "Ajouter {{count}} abonnements",
    foundInStatement: "{{count}} fois",
    addedSuccess: "{{count}} abonnement ajouté !",
    addedSuccessPlural: "{{count}} abonnements ajoutés !"
  },

  importExport: {
    restoreBackup: "Restaurer une sauvegarde",
    previouslyExported: "Fichier JSON exporté précédemment",
    importFromBank: "Importer depuis votre banque",
    csvFromBank: "Fichier CSV de votre banque",
    replaceOrMerge: "Vous avez {{existing}} abonnements.\n\nOK pour remplacer par {{imported}} abonnements importés.\nAnnuler pour fusionner (ajouter aux existants).",
    importSuccess: "{{count}} abonnement(s) importé(s) !",
    importFailed: "Échec de l'import : {{error}}",
    invalidFormat: "Format de fichier non reconnu",
    invalidData: "Données non valides"
  },

  cta: {
    headline1: "Fini les mauvaises surprises",
    headline2: "sur votre relevé bancaire",
    description: "{{app}} centralise tous vos abonnements et vous alerte avant chaque renouvellement. Rejoignez {{users}}+ utilisateurs !",
    autoImport: "Import automatique"
  },

  export: {
    exporting: "Export en cours...",
    failed: "Échec de l'export : {{error}}"
  },

  visualization: {
    monthlyCost: "Coût mensuel"
  },

  hero: {
    headline: "Voyez où va votre argent",
    subheadline: "Visualisez tous vos abonnements dans une belle grille"
  },

  privacy: {
    badge: "Vos données restent dans votre navigateur"
  }
};
