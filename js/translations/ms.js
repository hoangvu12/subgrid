// Malay translations
window.translations = window.translations || {};
window.translations.ms = {
  _meta: {
    name: "Malay",
    nativeName: "Bahasa Melayu",
    dir: "ltr"
  },

  nav: {
    stepOf: "Langkah {{current}} daripada {{total}}"
  },

  actions: {
    generateGrid: "Jana Grid",
    clearAll: "Padam Semua",
    export: "Eksport",
    import: "Import",
    back: "Kembali",
    insights: "Pandangan",
    save: "Simpan",
    saveChanges: "Simpan Perubahan",
    addAnother: "Tambah Lagi",
    browseAll: "Lihat Semua",
    quickAdd: "Tambah Pantas",
    takeControlNow: "Ambil Kawalan Sekarang",
    tryExample: "Cuba dengan data contoh",
    neverMissRenewal: "Jangan Terlepas Pembaharuan"
  },

  subscriptions: {
    addFirst: "Tambah langganan pertama",
    addFirstHint: "Netflix, Spotify, Gim, dll.",
    addSubscription: "Tambah Langganan",
    editSubscription: "Edit Langganan",
    noSubscriptions: "Tambah langganan untuk melihat visualisasi",
    deleteAll: "Padam semua langganan?",
    subscriptionCount: "{{count}} langganan",
    subscriptionCountPlural: "{{count}} langganan"
  },

  form: {
    website: "Laman Web (Pilihan)",
    websitePlaceholder: "netflix.com",
    serviceName: "Nama Perkhidmatan",
    serviceNamePlaceholder: "cth. Netflix",
    price: "Harga",
    pricePlaceholder: "0.00",
    currency: "Mata Wang",
    cycle: "Kitaran",
    color: "Warna",
    cycleMonthly: "Bulanan",
    cycleYearly: "Tahunan",
    cycleWeekly: "Mingguan"
  },

  settings: {
    title: "Tetapan",
    currency: "Mata Wang",
    currencyHint: "Semua harga akan ditukar menggunakan kadar pertukaran anggaran",
    importExport: "Import & Eksport",
    importExportHint: "Sandarkan langganan anda atau pindahkan ke peranti lain",
    language: "Bahasa",
    country: "Wilayah",
    countryHint: "Tukar harga praset kepada harga tempatan"
  },

  views: {
    grid: "Grid",
    swarm: "Kumpulan",
    bubbles: "Gelembung"
  },

  stats: {
    totalMonth: "Jumlah / Bulan",
    yearlyProjection: "Unjuran Tahunan"
  },

  presets: {
    browse: "Lihat Langganan",
    search: "Cari langganan...",
    noResults: "Tiada langganan dijumpai",
    all: "Semua"
  },

  categories: {
    Streaming: "Penstriman",
    Music: "Muzik",
    Gaming: "Permainan",
    AI: "AI",
    Productivity: "Produktiviti",
    Cloud: "Awan",
    Security: "Keselamatan",
    Fitness: "Kecergasan",
    News: "Berita",
    Learning: "Pembelajaran"
  },

  bankImport: {
    title: "Import Penyata Bank",
    uploadHint: "Muat naik fail CSV yang dieksport dari bank anda. Kami akan mengesan transaksi berulang yang mungkin langganan.",
    chooseFile: "Pilih fail CSV",
    dragDrop: "atau seret dan lepas",
    invalidCsv: "Fail CSV tidak sah. Pastikan ia mempunyai pengepala dan data transaksi.",
    foundTransactions: "Kami menemui {{count}} transaksi. Petakan lajur:",
    dateColumn: "Lajur Tarikh",
    descriptionColumn: "Lajur Penerangan / Penerima",
    amountColumn: "Lajur Jumlah",
    preview: "Pratonton",
    findSubscriptions: "Cari Langganan",
    foundPotential: "Dijumpai {{count}} langganan berpotensi. Pilih yang mana untuk ditambah:",
    noRecurring: "Tiada transaksi berulang dijumpai",
    tryBrowsing: "Cuba lihat transaksi lain di bawah",
    didntFind: "Tidak jumpa sesuatu?",
    browseOther: "Lihat {{count}} transaksi lain",
    searchTransactions: "Cari transaksi...",
    noTransactions: "Tiada transaksi dijumpai",
    addSelected: "Tambah yang Dipilih",
    addCount: "Tambah {{count}} Langganan",
    addCountPlural: "Tambah {{count}} Langganan",
    foundInStatement: "{{count}}x dalam penyata",
    addedSuccess: "Ditambah {{count}} langganan!",
    addedSuccessPlural: "Ditambah {{count}} langganan!"
  },

  importExport: {
    restoreBackup: "Pulihkan dari sandaran SubGrid",
    previouslyExported: "Fail .json yang dieksport sebelumnya",
    importFromBank: "Import dari penyata bank",
    csvFromBank: "Fail CSV dari bank anda",
    importFromCsv: "Import senarai langganan",
    csvList: "Fail CSV dengan langganan anda",
    replaceOrMerge: "Anda mempunyai {{existing}} langganan sedia ada.\n\nKlik OK untuk menggantikannya dengan {{imported}} langganan yang diimport.\n\nKlik Batal untuk menggabungkan (tambah yang diimport kepada yang sedia ada).",
    importSuccess: "Berjaya mengimport {{count}} langganan!",
    importFailed: "Import gagal: {{error}}",
    invalidFormat: "Format fail tidak sah",
    invalidData: "Data langganan tidak sah"
  },

  subImport: {
    title: "Import Senarai Langganan",
    uploadHint: "Muat naik fail CSV dengan langganan anda. Kami akan membantu anda memetakan lajur.",
    chooseFile: "Pilih fail CSV",
    dragDrop: "atau seret dan lepas",
    tipTitle: "Petua: format CSV",
    tipContent: "CSV anda perlu mempunyai lajur untuk nama, harga, dan pilihan kitaran pengebilan. Kami akan mengesan kebanyakan format secara automatik!",
    invalidCsv: "Fail CSV tidak sah. Pastikan ia mempunyai pengepala dan baris data.",
    foundRows: "Dijumpai",
    rowsMapColumns: "baris. Petakan lajur:",
    nameColumn: "Lajur Nama",
    priceColumn: "Lajur Harga / Jumlah",
    cycleColumn: "Lajur Kitaran (Pilihan)",
    preview: "Pratonton",
    parseSubscriptions: "Parse Langganan",
    selectColumns: "Sila pilih sekurang-kurangnya lajur Nama dan Harga.",
    parsedCount: "Diparse",
    subscriptionsSelect: "langganan. Pilih yang mana untuk ditambah:",
    noValidSubs: "Tiada langganan sah dijumpai",
    checkMapping: "Semak pemetaan lajur anda",
    addSelected: "Tambah yang Dipilih",
    addCount: "Tambah {{count}} Langganan",
    addCountPlural: "Tambah {{count}} Langganan",
    addedSuccess: "Ditambah {{count}} langganan!",
    addedSuccessPlural: "Ditambah {{count}} langganan!"
  },

  cta: {
    headline1: "Jangan terkejut dengan",
    headline2: "caj yang tidak dijangka lagi",
    description: "{{app}} menjejaki semua langganan anda di satu tempat dan mengingatkan anda sebelum setiap pembaharuan. Sertai {{users}}+ pengguna sekarang!",
    autoImport: "Import automatik"
  },

  export: {
    exporting: "Mengeksport...",
    failed: "Eksport gagal: {{error}}"
  },

  visualization: {
    monthlyCost: "Kos Bulanan"
  },

  hero: {
    headline: "Lihat ke mana wang anda pergi",
    subheadline: "Visualisasikan semua langganan anda dalam satu grid yang cantik"
  },

  privacy: {
    badge: "Data anda kekal dalam pelayar anda"
  },

  country: {
    welcome: "Selamat datang!",
    declineButton: "Tidak, kekalkan USD",
    changeLater: "Anda boleh menukar ini kemudian dalam Tetapan"
  }
};
