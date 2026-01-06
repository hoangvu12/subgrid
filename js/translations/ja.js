// Japanese translations
window.translations = window.translations || {};
window.translations.ja = {
  _meta: {
    name: "Japanese",
    nativeName: "日本語",
    dir: "ltr"
  },

  nav: {
    stepOf: "{{current}} / {{total}}"
  },

  actions: {
    generateGrid: "グリッド作成",
    clearAll: "すべて消去",
    export: "書き出し",
    import: "読み込み",
    back: "戻る",
    insights: "分析",
    save: "保存",
    saveChanges: "変更を保存",
    addAnother: "もう1つ追加",
    browseAll: "すべて見る",
    quickAdd: "かんたん追加",
    takeControlNow: "今すぐ始める"
  },

  subscriptions: {
    addFirst: "サブスクを追加しよう",
    addFirstHint: "Netflix、Spotify、ジムなど",
    addSubscription: "サブスクを追加",
    editSubscription: "編集",
    noSubscriptions: "サブスクを追加するとグラフが表示されます",
    deleteAll: "すべて削除しますか？",
    subscriptionCount: "{{count}}件",
    subscriptionCountPlural: "{{count}}件"
  },

  form: {
    website: "サイトURL（任意）",
    websitePlaceholder: "netflix.com",
    serviceName: "サービス名",
    serviceNamePlaceholder: "例: Netflix",
    price: "料金",
    pricePlaceholder: "0.00",
    currency: "通貨",
    cycle: "支払いサイクル",
    color: "カラー",
    cycleMonthly: "月払い",
    cycleYearly: "年払い",
    cycleWeekly: "週払い"
  },

  settings: {
    title: "設定",
    currency: "通貨",
    currencyHint: "料金は概算レートで換算されます",
    importExport: "データの読み込み・書き出し",
    importExportHint: "バックアップや他のデバイスへの移行に",
    language: "言語"
  },

  views: {
    grid: "グリッド",
    swarm: "スウォーム",
    bubbles: "バブル"
  },

  stats: {
    totalMonth: "月額合計",
    yearlyProjection: "年間の目安"
  },

  presets: {
    browse: "サービスから選ぶ",
    search: "サービスを検索...",
    noResults: "見つかりませんでした",
    all: "すべて"
  },

  categories: {
    Streaming: "動画配信",
    Music: "音楽",
    Gaming: "ゲーム",
    AI: "AI",
    Productivity: "仕事効率化",
    Cloud: "クラウド",
    Security: "セキュリティ",
    Fitness: "フィットネス",
    News: "ニュース",
    Learning: "学習"
  },

  bankImport: {
    title: "銀行明細から読み込む",
    uploadHint: "銀行から書き出したCSVをアップロードしてください。定期的な支払いを自動で検出します。",
    chooseFile: "CSVファイルを選ぶ",
    dragDrop: "またはドラッグ＆ドロップ",
    invalidCsv: "CSVファイルを読み込めませんでした。ファイル形式を確認してください。",
    foundTransactions: "{{count}}件の取引が見つかりました。各列を選んでください：",
    dateColumn: "日付の列",
    descriptionColumn: "内容・支払先の列",
    amountColumn: "金額の列",
    preview: "プレビュー",
    findSubscriptions: "サブスクを探す",
    foundPotential: "{{count}}件のサブスクが見つかりました。追加するものを選んでください：",
    noRecurring: "定期的な支払いは見つかりませんでした",
    tryBrowsing: "下の取引一覧もチェックしてみてください",
    didntFind: "見つからない？",
    browseOther: "他の{{count}}件を見る",
    searchTransactions: "取引を検索...",
    noTransactions: "取引がありません",
    addSelected: "選択したものを追加",
    addCount: "{{count}}件を追加",
    addCountPlural: "{{count}}件を追加",
    foundInStatement: "{{count}}回の支払い",
    addedSuccess: "{{count}}件追加しました！",
    addedSuccessPlural: "{{count}}件追加しました！"
  },

  importExport: {
    restoreBackup: "バックアップから復元",
    previouslyExported: "以前書き出したJSONファイル",
    importFromBank: "銀行明細から読み込む",
    csvFromBank: "銀行のCSVファイル",
    replaceOrMerge: "{{existing}}件のサブスクがあります。\n\nOKで{{imported}}件に置き換え。\nキャンセルで追加（既存のものは残ります）。",
    importSuccess: "{{count}}件読み込みました！",
    importFailed: "読み込めませんでした：{{error}}",
    invalidFormat: "ファイル形式が正しくありません",
    invalidData: "データを読み込めませんでした"
  },

  cta: {
    headline1: "もう請求日を",
    headline2: "忘れない",
    description: "{{app}}ならサブスクをまとめて管理。更新前にお知らせするから、うっかり課金も防げます。{{users}}人以上が利用中！",
    autoImport: "自動で読み込み"
  },

  export: {
    exporting: "書き出し中...",
    failed: "書き出せませんでした：{{error}}"
  },

  visualization: {
    monthlyCost: "月額"
  }
};
