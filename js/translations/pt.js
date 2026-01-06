// Portuguese translations
window.translations = window.translations || {};
window.translations.pt = {
  _meta: {
    name: "Portuguese",
    nativeName: "Português",
    dir: "ltr"
  },

  nav: {
    stepOf: "{{current}} / {{total}}"
  },

  actions: {
    generateGrid: "Criar grade",
    clearAll: "Limpar tudo",
    export: "Exportar",
    import: "Importar",
    back: "Voltar",
    insights: "Análise",
    save: "Salvar",
    saveChanges: "Salvar",
    addAnother: "Adicionar outro",
    browseAll: "Ver todos",
    quickAdd: "Adicionar rápido",
    takeControlNow: "Começar agora"
  },

  subscriptions: {
    addFirst: "Adicione sua primeira assinatura",
    addFirstHint: "Netflix, Spotify, academia...",
    addSubscription: "Adicionar assinatura",
    editSubscription: "Editar",
    noSubscriptions: "Adicione assinaturas para ver o gráfico",
    deleteAll: "Excluir tudo?",
    subscriptionCount: "{{count}} assinatura",
    subscriptionCountPlural: "{{count}} assinaturas"
  },

  form: {
    website: "Site (opcional)",
    websitePlaceholder: "netflix.com",
    serviceName: "Nome do serviço",
    serviceNamePlaceholder: "ex: Netflix",
    price: "Valor",
    pricePlaceholder: "0.00",
    currency: "Moeda",
    cycle: "Frequência",
    color: "Cor",
    cycleMonthly: "Mensal",
    cycleYearly: "Anual",
    cycleWeekly: "Semanal"
  },

  settings: {
    title: "Configurações",
    currency: "Moeda",
    currencyHint: "Os valores serão convertidos com taxas de câmbio aproximadas",
    importExport: "Importar e exportar",
    importExportHint: "Faça backup ou transfira para outro dispositivo",
    language: "Idioma"
  },

  views: {
    grid: "Grade",
    swarm: "Dispersão",
    bubbles: "Bolhas"
  },

  stats: {
    totalMonth: "Total / mês",
    yearlyProjection: "Estimativa anual"
  },

  presets: {
    browse: "Escolher da lista",
    search: "Buscar serviço...",
    noResults: "Nada encontrado",
    all: "Todos"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Música",
    Gaming: "Jogos",
    AI: "IA",
    Productivity: "Produtividade",
    Cloud: "Nuvem",
    Security: "Segurança",
    Fitness: "Fitness",
    News: "Notícias",
    Learning: "Educação"
  },

  bankImport: {
    title: "Importar do extrato bancário",
    uploadHint: "Envie um arquivo CSV do seu banco. Vamos identificar automaticamente os pagamentos recorrentes.",
    chooseFile: "Escolher arquivo CSV",
    dragDrop: "ou arraste aqui",
    invalidCsv: "Não foi possível ler o arquivo CSV. Verifique se o formato está correto.",
    foundTransactions: "{{count}} transações encontradas. Selecione as colunas:",
    dateColumn: "Coluna de data",
    descriptionColumn: "Coluna de descrição/estabelecimento",
    amountColumn: "Coluna de valor",
    preview: "Visualizar",
    findSubscriptions: "Buscar assinaturas",
    foundPotential: "{{count}} possíveis assinaturas. Selecione as que deseja adicionar:",
    noRecurring: "Nenhum pagamento recorrente encontrado",
    tryBrowsing: "Veja também as outras transações abaixo",
    didntFind: "Não encontrou?",
    browseOther: "Ver outras {{count}} transações",
    searchTransactions: "Buscar transações...",
    noTransactions: "Sem transações",
    addSelected: "Adicionar selecionados",
    addCount: "Adicionar {{count}} assinatura",
    addCountPlural: "Adicionar {{count}} assinaturas",
    foundInStatement: "{{count}} vezes",
    addedSuccess: "{{count}} assinatura adicionada!",
    addedSuccessPlural: "{{count}} assinaturas adicionadas!"
  },

  importExport: {
    restoreBackup: "Restaurar backup",
    previouslyExported: "Arquivo JSON exportado antes",
    importFromBank: "Importar do extrato bancário",
    csvFromBank: "Arquivo CSV do seu banco",
    replaceOrMerge: "Você tem {{existing}} assinaturas.\n\nOK: Substituir por {{imported}} importadas.\nCancelar: Mesclar (adicionar às existentes).",
    importSuccess: "{{count}} assinaturas importadas!",
    importFailed: "Erro ao importar: {{error}}",
    invalidFormat: "Formato não reconhecido",
    invalidData: "Não foi possível ler os dados"
  },

  cta: {
    headline1: "Chega de esquecer de cancelar",
    headline2: "aquela assinatura",
    description: "O {{app}} acompanha todas as suas assinaturas e te avisa antes de cada renovação. Junte-se a {{users}}+ usuários!",
    autoImport: "Importar automaticamente"
  },

  export: {
    exporting: "Exportando...",
    failed: "Erro ao exportar: {{error}}"
  },

  visualization: {
    monthlyCost: "Custo mensal"
  }
};
