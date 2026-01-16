// Turkish translations
window.translations = window.translations || {};
window.translations.tr = {
  _meta: {
    name: "Turkish",
    nativeName: "Türkçe",
    dir: "ltr"
  },

  nav: {
    stepOf: "Adım {{current}} / {{total}}"
  },

  actions: {
    generateGrid: "Izgara Oluştur",
    clearAll: "Tümünü Temizle",
    export: "Dışa Aktar",
    import: "İçe Aktar",
    back: "Geri",
    insights: "İstatistikler",
    save: "Kaydet",
    saveChanges: "Değişiklikleri Kaydet",
    addAnother: "Başka Ekle",
    browseAll: "Tümüne Göz At",
    quickAdd: "Hızlı Ekle",
    takeControlNow: "Şimdi Kontrolü Ele Al",
    tryExample: "Örnek verilerle dene",
    neverMissRenewal: "Yenilemeyi Asla Kaçırma"
  },

  subscriptions: {
    addFirst: "İlk aboneliği ekle",
    addFirstHint: "Netflix, Spotify, Spor Salonu, vb.",
    addSubscription: "Abonelik Ekle",
    editSubscription: "Aboneliği Düzenle",
    noSubscriptions: "Görselleştirmeyi görmek için abonelik ekleyin",
    deleteAll: "Tüm abonelikler silinsin mi?",
    subscriptionCount: "{{count}} abonelik",
    subscriptionCountPlural: "{{count}} abonelik"
  },

  form: {
    website: "Web Sitesi (İsteğe bağlı)",
    websitePlaceholder: "netflix.com",
    serviceName: "Hizmet Adı",
    serviceNamePlaceholder: "örn. Netflix",
    price: "Fiyat",
    pricePlaceholder: "0.00",
    currency: "Para Birimi",
    cycle: "Döngü",
    color: "Renk",
    cycleMonthly: "Aylık",
    cycleYearly: "Yıllık",
    cycleWeekly: "Haftalık"
  },

  settings: {
    title: "Ayarlar",
    currency: "Para Birimi",
    currencyHint: "Tüm fiyatlar yaklaşık döviz kurları kullanılarak dönüştürülecektir",
    importExport: "İçe ve Dışa Aktar",
    importExportHint: "Aboneliklerinizi yedekleyin veya başka bir cihaza aktarın",
    language: "Dil",
    country: "Bölge",
    countryHint: "Önceden ayarlanmış fiyatları yerel fiyatlara değiştirir"
  },

  views: {
    grid: "Izgara",
    swarm: "Sürü",
    bubbles: "Baloncuklar"
  },

  stats: {
    totalMonth: "Toplam / Ay",
    yearlyProjection: "Yıllık Projeksiyon"
  },

  presets: {
    browse: "Aboneliklere Göz At",
    search: "Abonelik ara...",
    noResults: "Abonelik bulunamadı",
    all: "Tümü"
  },

  categories: {
    Streaming: "Yayın",
    Music: "Müzik",
    Gaming: "Oyun",
    AI: "Yapay Zeka",
    Productivity: "Verimlilik",
    Cloud: "Bulut",
    Security: "Güvenlik",
    Fitness: "Fitness",
    News: "Haberler",
    Learning: "Öğrenme"
  },

  bankImport: {
    title: "Banka Hesap Özeti İçe Aktar",
    uploadHint: "Bankanızdan dışa aktarılmış bir CSV dosyası yükleyin. Abonelik olabilecek yinelenen işlemleri tespit edeceğiz.",
    chooseFile: "CSV dosyası seçin",
    dragDrop: "veya sürükleyip bırakın",
    invalidCsv: "Geçersiz CSV dosyası. Başlıklar ve işlem verileri içerdiğinden emin olun.",
    foundTransactions: "{{count}} işlem bulduk. Sütunları eşleyin:",
    dateColumn: "Tarih Sütunu",
    descriptionColumn: "Açıklama / Alıcı Sütunu",
    amountColumn: "Tutar Sütunu",
    preview: "Önizleme",
    findSubscriptions: "Abonelikleri Bul",
    foundPotential: "{{count}} potansiyel abonelik bulundu. Hangilerinin ekleneceğini seçin:",
    noRecurring: "Yinelenen işlem bulunamadı",
    tryBrowsing: "Aşağıdaki diğer işlemlere göz atmayı deneyin",
    didntFind: "Bir şey bulamadınız mı?",
    browseOther: "{{count}} diğer işleme göz at",
    searchTransactions: "İşlem ara...",
    noTransactions: "İşlem bulunamadı",
    addSelected: "Seçilenleri Ekle",
    addCount: "{{count}} Abonelik Ekle",
    addCountPlural: "{{count}} Abonelik Ekle",
    foundInStatement: "Hesap özetinde {{count}}x",
    addedSuccess: "{{count}} abonelik eklendi!",
    addedSuccessPlural: "{{count}} abonelik eklendi!"
  },

  importExport: {
    restoreBackup: "SubGrid yedeğinden geri yükle",
    previouslyExported: "Daha önce dışa aktarılmış .json dosyası",
    importFromBank: "Banka hesap özetinden içe aktar",
    csvFromBank: "Bankanızdan CSV dosyası",
    importFromCsv: "Abonelik listesi içe aktar",
    csvList: "Aboneliklerinizi içeren CSV dosyası",
    replaceOrMerge: "{{existing}} mevcut aboneliğiniz var.\n\nBunları {{imported}} içe aktarılan abonelikle değiştirmek için Tamam'a tıklayın.\n\nBirleştirmek için İptal'e tıklayın (içe aktarılanları mevcut olanlara ekle).",
    importSuccess: "{{count}} abonelik başarıyla içe aktarıldı!",
    importFailed: "İçe aktarma başarısız: {{error}}",
    invalidFormat: "Geçersiz dosya formatı",
    invalidData: "Geçersiz abonelik verisi"
  },

  subImport: {
    title: "Abonelik Listesi İçe Aktar",
    uploadHint: "Aboneliklerinizi içeren bir CSV dosyası yükleyin. Sütunları eşlemenize yardımcı olacağız.",
    chooseFile: "CSV dosyası seçin",
    dragDrop: "veya sürükleyip bırakın",
    tipTitle: "İpucu: CSV formatı",
    tipContent: "CSV'nizde ad, fiyat ve isteğe bağlı olarak faturalama döngüsü için sütunlar olmalıdır. Çoğu formatı otomatik olarak algılayacağız!",
    invalidCsv: "Geçersiz CSV dosyası. Başlıklar ve veri satırları içerdiğinden emin olun.",
    foundRows: "Bulundu",
    rowsMapColumns: "satır. Sütunları eşleyin:",
    nameColumn: "Ad Sütunu",
    priceColumn: "Fiyat / Tutar Sütunu",
    cycleColumn: "Döngü Sütunu (İsteğe bağlı)",
    preview: "Önizleme",
    parseSubscriptions: "Abonelikleri Ayrıştır",
    selectColumns: "Lütfen en azından Ad ve Fiyat sütunlarını seçin.",
    parsedCount: "Ayrıştırıldı",
    subscriptionsSelect: "abonelik. Hangilerinin ekleneceğini seçin:",
    noValidSubs: "Geçerli abonelik bulunamadı",
    checkMapping: "Sütun eşlemenizi kontrol edin",
    addSelected: "Seçilenleri Ekle",
    addCount: "{{count}} Abonelik Ekle",
    addCountPlural: "{{count}} Abonelik Ekle",
    addedSuccess: "{{count}} abonelik eklendi!",
    addedSuccessPlural: "{{count}} abonelik eklendi!"
  },

  cta: {
    headline1: "Beklenmedik ücretlerle",
    headline2: "bir daha asla şaşırmayın",
    description: "{{app}} tüm aboneliklerinizi tek bir yerde takip eder ve her yenilemeden önce sizi uyarır. {{users}}+ kullanıcıya şimdi katılın!",
    autoImport: "Otomatik olarak içe aktar"
  },

  export: {
    exporting: "Dışa aktarılıyor...",
    failed: "Dışa aktarma başarısız: {{error}}"
  },

  visualization: {
    monthlyCost: "Aylık Maliyet"
  },

  hero: {
    headline: "Paranızın nereye gittiğini görün",
    subheadline: "Tüm aboneliklerinizi güzel bir ızgarada görselleştirin"
  },

  privacy: {
    badge: "Verileriniz tarayıcınızda kalır"
  },

  country: {
    welcome: "Hoş geldiniz!",
    declineButton: "Hayır, USD'yi koru",
    changeLater: "Bunu daha sonra Ayarlar'dan değiştirebilirsiniz"
  }
};
