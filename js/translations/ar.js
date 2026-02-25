// Arabic translations
window.translations = window.translations || {};
window.translations.ar = {
  _meta: {
    name: "Arabic",
    nativeName: "العربية",
    dir: "rtl"
  },

  nav: {
    stepOf: "الخطوة {{current}} من {{total}}"
  },

  actions: {
    generateGrid: "إنشاء الشبكة",
    clearAll: "مسح الكل",
    export: "تصدير",
    import: "استيراد",
    back: "رجوع",
    insights: "إحصائيات",
    save: "حفظ",
    saveChanges: "حفظ التغييرات",
    addAnother: "إضافة آخر",
    browseAll: "تصفح الكل",
    quickAdd: "إضافة سريعة",
    takeControlNow: "تحكم الآن",
    tryExample: "جرب مع بيانات نموذجية",
    neverMissRenewal: "لا تفوت أي تجديد"
  },

  subscriptions: {
    addFirst: "أضف أول اشتراك",
    addFirstHint: "نتفليكس، سبوتيفاي، نادي رياضي، إلخ.",
    addSubscription: "إضافة اشتراك",
    editSubscription: "تعديل الاشتراك",
    noSubscriptions: "أضف اشتراكات لرؤية التصور",
    deleteAll: "حذف جميع الاشتراكات؟",
    subscriptionCount: "{{count}} اشتراك",
    subscriptionCountPlural: "{{count}} اشتراكات"
  },

  form: {
    website: "الموقع (اختياري)",
    websitePlaceholder: "netflix.com",
    serviceName: "اسم الخدمة",
    serviceNamePlaceholder: "مثال: نتفليكس",
    price: "السعر",
    pricePlaceholder: "0.00",
    currency: "العملة",
    cycle: "الدورة",
    color: "اللون",
    cycleMonthly: "شهري",
    cycleYearly: "سنوي",
    cycleWeekly: "أسبوعي"
  },

  settings: {
    title: "الإعدادات",
    currency: "العملة",
    currencyHint: "سيتم تحويل جميع الأسعار باستخدام أسعار صرف تقريبية",
    importExport: "استيراد وتصدير",
    importExportHint: "قم بعمل نسخة احتياطية من اشتراكاتك أو انقلها إلى جهاز آخر",
    language: "اللغة",
    country: "المنطقة",
    countryHint: "يغير الأسعار المحددة مسبقاً إلى الأسعار المحلية"
  },

  views: {
    grid: "شبكة",
    swarm: "سرب",
    bubbles: "فقاعات"
  },

  stats: {
    totalMonth: "الإجمالي / شهر",
    yearlyProjection: "التوقع السنوي"
  },

  presets: {
    browse: "تصفح الاشتراكات",
    search: "ابحث عن اشتراكات...",
    noResults: "لم يتم العثور على اشتراكات",
    all: "الكل"
  },

  categories: {
    Streaming: "البث",
    Music: "الموسيقى",
    Gaming: "الألعاب",
    AI: "الذكاء الاصطناعي",
    Productivity: "الإنتاجية",
    Cloud: "السحابة",
    Security: "الأمان",
    Fitness: "اللياقة",
    News: "الأخبار",
    Learning: "التعلم"
  },

  bankImport: {
    title: "استيراد كشف الحساب البنكي",
    uploadHint: "قم بتحميل ملف CSV المصدر من البنك. سنكتشف المعاملات المتكررة التي قد تكون اشتراكات.",
    chooseFile: "اختر ملف CSV",
    dragDrop: "أو اسحب وأفلت",
    invalidCsv: "ملف CSV غير صالح. تأكد من احتوائه على رؤوس وبيانات المعاملات.",
    foundTransactions: "وجدنا {{count}} معاملة. قم بتعيين الأعمدة:",
    dateColumn: "عمود التاريخ",
    descriptionColumn: "عمود الوصف / المستفيد",
    amountColumn: "عمود المبلغ",
    preview: "معاينة",
    findSubscriptions: "البحث عن الاشتراكات",
    foundPotential: "تم العثور على {{count}} اشتراكات محتملة. اختر أيها تريد إضافتها:",
    noRecurring: "لم يتم العثور على معاملات متكررة",
    tryBrowsing: "جرب تصفح المعاملات الأخرى أدناه",
    didntFind: "لم تجد شيئاً؟",
    browseOther: "تصفح {{count}} معاملات أخرى",
    searchTransactions: "ابحث عن معاملات...",
    noTransactions: "لم يتم العثور على معاملات",
    addSelected: "إضافة المحدد",
    addCount: "إضافة {{count}} اشتراك",
    addCountPlural: "إضافة {{count}} اشتراكات",
    foundInStatement: "{{count}} مرة في الكشف",
    addedSuccess: "تمت إضافة {{count}} اشتراك!",
    addedSuccessPlural: "تمت إضافة {{count}} اشتراكات!"
  },

  importExport: {
    restoreBackup: "استعادة من نسخة SubGrid الاحتياطية",
    previouslyExported: "ملف .json مصدر مسبقاً",
    importFromBank: "استيراد من كشف الحساب البنكي",
    csvFromBank: "ملف CSV من البنك",
    importFromCsv: "استيراد قائمة الاشتراكات",
    csvList: "ملف CSV يحتوي على اشتراكاتك",
    replaceOrMerge: "لديك {{existing}} اشتراك(ات) موجودة.\n\nانقر موافق لاستبدالها بـ {{imported}} اشتراك(ات) مستوردة.\n\nانقر إلغاء للدمج (إضافة المستورد إلى الموجود).",
    importSuccess: "تم استيراد {{count}} اشتراك(ات) بنجاح!",
    importFailed: "فشل الاستيراد: {{error}}",
    invalidFormat: "تنسيق ملف غير صالح",
    invalidData: "بيانات اشتراك غير صالحة"
  },

  subImport: {
    title: "استيراد قائمة الاشتراكات",
    uploadHint: "قم بتحميل ملف CSV يحتوي على اشتراكاتك. سنساعدك في تعيين الأعمدة.",
    chooseFile: "اختر ملف CSV",
    dragDrop: "أو اسحب وأفلت",
    tipTitle: "نصيحة: تنسيق CSV",
    tipContent: "يجب أن يحتوي ملف CSV على أعمدة للاسم والسعر ودورة الفوترة اختيارياً. سنكتشف معظم التنسيقات تلقائياً!",
    invalidCsv: "ملف CSV غير صالح. تأكد من احتوائه على رؤوس وصفوف بيانات.",
    foundRows: "تم العثور على",
    rowsMapColumns: "صفوف. قم بتعيين الأعمدة:",
    nameColumn: "عمود الاسم",
    priceColumn: "عمود السعر / المبلغ",
    cycleColumn: "عمود الدورة (اختياري)",
    preview: "معاينة",
    parseSubscriptions: "تحليل الاشتراكات",
    selectColumns: "يرجى اختيار عمودي الاسم والسعر على الأقل.",
    parsedCount: "تم تحليل",
    subscriptionsSelect: "اشتراكات. اختر أيها تريد إضافتها:",
    noValidSubs: "لم يتم العثور على اشتراكات صالحة",
    checkMapping: "تحقق من تعيين الأعمدة",
    addSelected: "إضافة المحدد",
    addCount: "إضافة {{count}} اشتراك",
    addCountPlural: "إضافة {{count}} اشتراكات",
    addedSuccess: "تمت إضافة {{count}} اشتراك!",
    addedSuccessPlural: "تمت إضافة {{count}} اشتراكات!"
  },

  cta: {
    headline1: "لا تتفاجأ أبداً",
    headline2: "بالرسوم غير المتوقعة مرة أخرى",
    description: "{{app}} يتتبع جميع اشتراكاتك في مكان واحد ويذكرك قبل كل تجديد. انضم إلى {{users}}+ مستخدم الآن!",
    autoImport: "استيراد تلقائي لـ"
  },

  export: {
    exporting: "جاري التصدير...",
    failed: "فشل التصدير: {{error}}"
  },

  visualization: {
    monthlyCost: "التكلفة الشهرية"
  },

  hero: {
    headline: "شاهد أين تذهب أموالك",
    subheadline: "تصور جميع اشتراكاتك في شبكة جميلة واحدة"
  },

  privacy: {
    badge: "بياناتك تبقى في متصفحك"
  },

  country: {
    welcome: "مرحباً!",
    declineButton: "لا، احتفظ بالدولار",
    changeLater: "يمكنك تغيير هذا لاحقاً في الإعدادات"
  }
};
