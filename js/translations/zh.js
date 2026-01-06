// Chinese Simplified translations
window.translations = window.translations || {};
window.translations.zh = {
  _meta: {
    name: "Chinese",
    nativeName: "简体中文",
    dir: "ltr"
  },

  nav: {
    stepOf: "{{current}} / {{total}}"
  },

  actions: {
    generateGrid: "生成视图",
    clearAll: "全部清除",
    export: "导出",
    import: "导入",
    back: "返回",
    insights: "统计分析",
    save: "保存",
    saveChanges: "保存更改",
    addAnother: "继续添加",
    browseAll: "查看全部",
    quickAdd: "快速添加",
    takeControlNow: "立即开始"
  },

  subscriptions: {
    addFirst: "添加你的第一个订阅",
    addFirstHint: "Netflix、Spotify、健身房等",
    addSubscription: "添加订阅",
    editSubscription: "编辑",
    noSubscriptions: "添加订阅后即可查看图表",
    deleteAll: "确定全部删除？",
    subscriptionCount: "{{count}} 个",
    subscriptionCountPlural: "{{count}} 个"
  },

  form: {
    website: "网址（选填）",
    websitePlaceholder: "netflix.com",
    serviceName: "服务名称",
    serviceNamePlaceholder: "如 Netflix",
    price: "金额",
    pricePlaceholder: "0.00",
    currency: "货币",
    cycle: "周期",
    color: "颜色",
    cycleMonthly: "每月",
    cycleYearly: "每年",
    cycleWeekly: "每周"
  },

  settings: {
    title: "设置",
    currency: "货币",
    currencyHint: "金额将按大致汇率换算",
    importExport: "导入与导出",
    importExportHint: "备份数据或转移到其他设备",
    language: "语言"
  },

  views: {
    grid: "网格",
    swarm: "散点",
    bubbles: "气泡"
  },

  stats: {
    totalMonth: "月度总计",
    yearlyProjection: "年度预估"
  },

  presets: {
    browse: "从列表选择",
    search: "搜索服务...",
    noResults: "没有找到",
    all: "全部"
  },

  categories: {
    Streaming: "视频流媒体",
    Music: "音乐",
    Gaming: "游戏",
    AI: "AI工具",
    Productivity: "效率工具",
    Cloud: "云存储",
    Security: "安全",
    Fitness: "健身",
    News: "新闻",
    Learning: "学习"
  },

  bankImport: {
    title: "从银行账单导入",
    uploadHint: "上传银行导出的 CSV 文件，系统会自动识别订阅类的定期扣款。",
    chooseFile: "选择 CSV 文件",
    dragDrop: "或拖拽到这里",
    invalidCsv: "无法读取此 CSV 文件，请检查格式是否正确。",
    foundTransactions: "找到 {{count}} 条交易记录，请选择对应的列：",
    dateColumn: "日期列",
    descriptionColumn: "描述/商户列",
    amountColumn: "金额列",
    preview: "预览",
    findSubscriptions: "查找订阅",
    foundPotential: "找到 {{count}} 个可能是订阅的项目，选择要添加的：",
    noRecurring: "没有找到定期扣款",
    tryBrowsing: "可以看看下方的其他交易",
    didntFind: "没找到？",
    browseOther: "查看其他 {{count}} 条交易",
    searchTransactions: "搜索交易...",
    noTransactions: "没有交易记录",
    addSelected: "添加已选",
    addCount: "添加 {{count}} 个",
    addCountPlural: "添加 {{count}} 个",
    foundInStatement: "出现 {{count}} 次",
    addedSuccess: "已添加 {{count}} 个！",
    addedSuccessPlural: "已添加 {{count}} 个！"
  },

  importExport: {
    restoreBackup: "从备份恢复",
    previouslyExported: "之前导出的 JSON 文件",
    importFromBank: "从银行账单导入",
    csvFromBank: "银行导出的 CSV 文件",
    replaceOrMerge: "你已有 {{existing}} 个订阅。\n\n点击「确定」替换为 {{imported}} 个导入的订阅。\n点击「取消」合并（保留现有，添加新的）。",
    importSuccess: "成功导入 {{count}} 个！",
    importFailed: "导入失败：{{error}}",
    invalidFormat: "文件格式不正确",
    invalidData: "无法识别数据"
  },

  cta: {
    headline1: "告别忘记取消订阅",
    headline2: "导致的意外扣款",
    description: "用 {{app}} 管理所有订阅，续费前自动提醒，不再被「自动续费」坑钱。已有 {{users}}+ 用户在用！",
    autoImport: "自动导入"
  },

  export: {
    exporting: "导出中...",
    failed: "导出失败：{{error}}"
  },

  visualization: {
    monthlyCost: "月费用"
  }
};
