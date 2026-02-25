// Urdu translations
window.translations = window.translations || {};
window.translations.ur = {
  _meta: {
    name: "Urdu",
    nativeName: "اردو",
    dir: "rtl"
  },

  nav: {
    stepOf: "مرحلہ {{current}} از {{total}}"
  },

  actions: {
    generateGrid: "گرڈ بنائیں",
    clearAll: "سب صاف کریں",
    export: "برآمد",
    import: "درآمد",
    back: "واپس",
    insights: "بصیرت",
    save: "محفوظ کریں",
    saveChanges: "تبدیلیاں محفوظ کریں",
    addAnother: "مزید شامل کریں",
    browseAll: "سب دیکھیں",
    quickAdd: "فوری اضافہ",
    takeControlNow: "ابھی کنٹرول لیں",
    tryExample: "مثالی ڈیٹا کے ساتھ آزمائیں",
    neverMissRenewal: "کبھی تجدید نہ چھوڑیں"
  },

  subscriptions: {
    addFirst: "پہلی رکنیت شامل کریں",
    addFirstHint: "Netflix، Spotify، جم، وغیرہ۔",
    addSubscription: "رکنیت شامل کریں",
    editSubscription: "رکنیت میں ترمیم کریں",
    noSubscriptions: "تصور دیکھنے کے لیے رکنیات شامل کریں",
    deleteAll: "تمام رکنیات حذف کریں؟",
    subscriptionCount: "{{count}} رکنیت",
    subscriptionCountPlural: "{{count}} رکنیات"
  },

  form: {
    website: "ویب سائٹ (اختیاری)",
    websitePlaceholder: "netflix.com",
    serviceName: "سروس کا نام",
    serviceNamePlaceholder: "مثلاً Netflix",
    price: "قیمت",
    pricePlaceholder: "0.00",
    currency: "کرنسی",
    cycle: "سائیکل",
    color: "رنگ",
    cycleMonthly: "ماہانہ",
    cycleYearly: "سالانہ",
    cycleWeekly: "ہفتہ وار"
  },

  settings: {
    title: "ترتیبات",
    currency: "کرنسی",
    currencyHint: "تمام قیمتیں تخمینی شرح تبادلہ کا استعمال کرتے ہوئے تبدیل کی جائیں گی",
    importExport: "درآمد اور برآمد",
    importExportHint: "اپنی رکنیات کا بیک اپ لیں یا انہیں دوسرے ڈیوائس پر منتقل کریں",
    language: "زبان",
    country: "خطہ",
    countryHint: "پہلے سے طے شدہ قیمتوں کو مقامی قیمتوں میں تبدیل کرتا ہے"
  },

  views: {
    grid: "گرڈ",
    swarm: "جھنڈ",
    bubbles: "بلبلے"
  },

  stats: {
    totalMonth: "کل / ماہ",
    yearlyProjection: "سالانہ تخمینہ"
  },

  presets: {
    browse: "رکنیات براؤز کریں",
    search: "رکنیات تلاش کریں...",
    noResults: "کوئی رکنیت نہیں ملی",
    all: "سب"
  },

  categories: {
    Streaming: "سٹریمنگ",
    Music: "موسیقی",
    Gaming: "گیمنگ",
    AI: "AI",
    Productivity: "پیداواریت",
    Cloud: "کلاؤڈ",
    Security: "سیکیورٹی",
    Fitness: "فٹنس",
    News: "خبریں",
    Learning: "سیکھنا"
  },

  bankImport: {
    title: "بینک اسٹیٹمنٹ درآمد کریں",
    uploadHint: "اپنے بینک سے برآمد کردہ CSV فائل اپ لوڈ کریں۔ ہم بار بار ہونے والے لین دین کا پتہ لگائیں گے جو رکنیات ہو سکتی ہیں۔",
    chooseFile: "CSV فائل منتخب کریں",
    dragDrop: "یا گھسیٹ کر چھوڑیں",
    invalidCsv: "غلط CSV فائل۔ یقینی بنائیں کہ اس میں ہیڈرز اور لین دین کا ڈیٹا ہے۔",
    foundTransactions: "ہمیں {{count}} لین دین ملے۔ کالم میپ کریں:",
    dateColumn: "تاریخ کالم",
    descriptionColumn: "تفصیل / وصول کنندہ کالم",
    amountColumn: "رقم کالم",
    preview: "پیش نظارہ",
    findSubscriptions: "رکنیات تلاش کریں",
    foundPotential: "{{count}} ممکنہ رکنیات ملیں۔ منتخب کریں کون سی شامل کرنی ہیں:",
    noRecurring: "کوئی بار بار ہونے والے لین دین نہیں ملے",
    tryBrowsing: "نیچے دیگر لین دین براؤز کرنے کی کوشش کریں",
    didntFind: "کچھ نہیں ملا؟",
    browseOther: "{{count}} دیگر لین دین براؤز کریں",
    searchTransactions: "لین دین تلاش کریں...",
    noTransactions: "کوئی لین دین نہیں ملا",
    addSelected: "منتخب شامل کریں",
    addCount: "{{count}} رکنیت شامل کریں",
    addCountPlural: "{{count}} رکنیات شامل کریں",
    foundInStatement: "اسٹیٹمنٹ میں {{count}}x",
    addedSuccess: "{{count}} رکنیت شامل کی گئی!",
    addedSuccessPlural: "{{count}} رکنیات شامل کی گئیں!"
  },

  importExport: {
    restoreBackup: "SubGrid بیک اپ سے بحال کریں",
    previouslyExported: "پہلے برآمد کردہ .json فائل",
    importFromBank: "بینک اسٹیٹمنٹ سے درآمد کریں",
    csvFromBank: "آپ کے بینک سے CSV فائل",
    importFromCsv: "رکنیت کی فہرست درآمد کریں",
    csvList: "آپ کی رکنیات کے ساتھ CSV فائل",
    replaceOrMerge: "آپ کے پاس {{existing}} موجودہ رکنیات ہیں۔\n\nانہیں {{imported}} درآمد شدہ رکنیات سے بدلنے کے لیے OK کلک کریں۔\n\nملانے کے لیے منسوخ کریں کلک کریں (درآمد شدہ کو موجودہ میں شامل کریں)۔",
    importSuccess: "{{count}} رکنیات کامیابی سے درآمد کی گئیں!",
    importFailed: "درآمد ناکام: {{error}}",
    invalidFormat: "غلط فائل فارمیٹ",
    invalidData: "غلط رکنیت ڈیٹا"
  },

  subImport: {
    title: "رکنیت کی فہرست درآمد کریں",
    uploadHint: "اپنی رکنیات کے ساتھ ایک CSV فائل اپ لوڈ کریں۔ ہم کالم میپ کرنے میں آپ کی مدد کریں گے۔",
    chooseFile: "CSV فائل منتخب کریں",
    dragDrop: "یا گھسیٹ کر چھوڑیں",
    tipTitle: "ٹپ: CSV فارمیٹ",
    tipContent: "آپ کی CSV میں نام، قیمت اور اختیاری طور پر بلنگ سائیکل کے لیے کالم ہونے چاہیے۔ ہم زیادہ تر فارمیٹس خود بخود پتہ لگا لیں گے!",
    invalidCsv: "غلط CSV فائل۔ یقینی بنائیں کہ اس میں ہیڈرز اور ڈیٹا کی قطاریں ہیں۔",
    foundRows: "ملا",
    rowsMapColumns: "قطاریں۔ کالم میپ کریں:",
    nameColumn: "نام کالم",
    priceColumn: "قیمت / رقم کالم",
    cycleColumn: "سائیکل کالم (اختیاری)",
    preview: "پیش نظارہ",
    parseSubscriptions: "رکنیات پارس کریں",
    selectColumns: "براہ کرم کم از کم نام اور قیمت کالم منتخب کریں۔",
    parsedCount: "پارس کیا",
    subscriptionsSelect: "رکنیات۔ منتخب کریں کون سی شامل کرنی ہیں:",
    noValidSubs: "کوئی درست رکنیت نہیں ملی",
    checkMapping: "اپنی کالم میپنگ چیک کریں",
    addSelected: "منتخب شامل کریں",
    addCount: "{{count}} رکنیت شامل کریں",
    addCountPlural: "{{count}} رکنیات شامل کریں",
    addedSuccess: "{{count}} رکنیت شامل کی گئی!",
    addedSuccessPlural: "{{count}} رکنیات شامل کی گئیں!"
  },

  cta: {
    headline1: "غیر متوقع چارجز سے",
    headline2: "پھر کبھی حیران نہ ہوں",
    description: "{{app}} آپ کی تمام رکنیات کو ایک جگہ ٹریک کرتا ہے اور ہر تجدید سے پہلے آپ کو یاد دلاتا ہے۔ ابھی {{users}}+ صارفین میں شامل ہوں!",
    autoImport: "خودکار درآمد کریں"
  },

  export: {
    exporting: "برآمد ہو رہی ہے...",
    failed: "برآمد ناکام: {{error}}"
  },

  visualization: {
    monthlyCost: "ماہانہ لاگت"
  },

  hero: {
    headline: "دیکھیں آپ کا پیسہ کہاں جاتا ہے",
    subheadline: "اپنی تمام رکنیات کو ایک خوبصورت گرڈ میں دیکھیں"
  },

  privacy: {
    badge: "آپ کا ڈیٹا آپ کے براؤزر میں رہتا ہے"
  },

  country: {
    welcome: "خوش آمدید!",
    declineButton: "نہیں، USD رکھیں",
    changeLater: "آپ اسے بعد میں ترتیبات میں تبدیل کر سکتے ہیں"
  }
};
