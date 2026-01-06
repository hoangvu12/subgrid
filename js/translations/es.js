// Spanish translations
window.translations = window.translations || {};
window.translations.es = {
  _meta: {
    name: "Spanish",
    nativeName: "Español",
    dir: "ltr"
  },

  nav: {
    stepOf: "{{current}} / {{total}}"
  },

  actions: {
    generateGrid: "Crear cuadrícula",
    clearAll: "Borrar todo",
    export: "Exportar",
    import: "Importar",
    back: "Volver",
    insights: "Análisis",
    save: "Guardar",
    saveChanges: "Guardar",
    addAnother: "Añadir otro",
    browseAll: "Ver todos",
    quickAdd: "Añadir rápido",
    takeControlNow: "Empezar ahora"
  },

  subscriptions: {
    addFirst: "Añade tu primera suscripción",
    addFirstHint: "Netflix, Spotify, gimnasio...",
    addSubscription: "Añadir suscripción",
    editSubscription: "Editar",
    noSubscriptions: "Añade suscripciones para ver el gráfico",
    deleteAll: "¿Eliminar todo?",
    subscriptionCount: "{{count}} suscripción",
    subscriptionCountPlural: "{{count}} suscripciones"
  },

  form: {
    website: "Web (opcional)",
    websitePlaceholder: "netflix.com",
    serviceName: "Nombre del servicio",
    serviceNamePlaceholder: "ej: Netflix",
    price: "Precio",
    pricePlaceholder: "0.00",
    currency: "Moneda",
    cycle: "Frecuencia",
    color: "Color",
    cycleMonthly: "Mensual",
    cycleYearly: "Anual",
    cycleWeekly: "Semanal"
  },

  settings: {
    title: "Ajustes",
    currency: "Moneda",
    currencyHint: "Los precios se convertirán con tasas de cambio aproximadas",
    importExport: "Importar y exportar",
    importExportHint: "Haz una copia de seguridad o pásalo a otro dispositivo",
    language: "Idioma"
  },

  views: {
    grid: "Cuadrícula",
    swarm: "Dispersión",
    bubbles: "Burbujas"
  },

  stats: {
    totalMonth: "Total / mes",
    yearlyProjection: "Estimación anual"
  },

  presets: {
    browse: "Elegir de la lista",
    search: "Buscar servicio...",
    noResults: "Sin resultados",
    all: "Todos"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Música",
    Gaming: "Juegos",
    AI: "IA",
    Productivity: "Productividad",
    Cloud: "Nube",
    Security: "Seguridad",
    Fitness: "Fitness",
    News: "Noticias",
    Learning: "Formación"
  },

  bankImport: {
    title: "Importar desde tu banco",
    uploadHint: "Sube un archivo CSV de tu banco. Detectaremos automáticamente los pagos recurrentes.",
    chooseFile: "Elegir archivo CSV",
    dragDrop: "o arrastra aquí",
    invalidCsv: "No se pudo leer el archivo CSV. Revisa que el formato sea correcto.",
    foundTransactions: "{{count}} transacciones encontradas. Selecciona las columnas:",
    dateColumn: "Columna de fecha",
    descriptionColumn: "Columna de descripción/comercio",
    amountColumn: "Columna de importe",
    preview: "Vista previa",
    findSubscriptions: "Buscar suscripciones",
    foundPotential: "{{count}} posibles suscripciones. Selecciona las que quieras añadir:",
    noRecurring: "No se encontraron pagos recurrentes",
    tryBrowsing: "Revisa también las otras transacciones de abajo",
    didntFind: "¿No lo encuentras?",
    browseOther: "Ver otras {{count}} transacciones",
    searchTransactions: "Buscar transacciones...",
    noTransactions: "Sin transacciones",
    addSelected: "Añadir selección",
    addCount: "Añadir {{count}} suscripción",
    addCountPlural: "Añadir {{count}} suscripciones",
    foundInStatement: "{{count}} veces",
    addedSuccess: "¡{{count}} suscripción añadida!",
    addedSuccessPlural: "¡{{count}} suscripciones añadidas!"
  },

  importExport: {
    restoreBackup: "Restaurar copia de seguridad",
    previouslyExported: "Archivo JSON exportado antes",
    importFromBank: "Importar desde tu banco",
    csvFromBank: "Archivo CSV de tu banco",
    replaceOrMerge: "Tienes {{existing}} suscripciones.\n\nAceptar: Reemplazar con {{imported}} importadas.\nCancelar: Combinar (añadir a las existentes).",
    importSuccess: "¡{{count}} suscripciones importadas!",
    importFailed: "Error al importar: {{error}}",
    invalidFormat: "Formato no reconocido",
    invalidData: "No se pudieron leer los datos"
  },

  cta: {
    headline1: "Olvídate de los cobros",
    headline2: "que se te pasaron cancelar",
    description: "{{app}} te ayuda a controlar todas tus suscripciones y te avisa antes de cada renovación. ¡Ya somos {{users}}+ usuarios!",
    autoImport: "Importar automáticamente"
  },

  export: {
    exporting: "Exportando...",
    failed: "Error al exportar: {{error}}"
  },

  visualization: {
    monthlyCost: "Coste mensual"
  }
};
