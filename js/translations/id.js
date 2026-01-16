// Indonesian translations
window.translations = window.translations || {};
window.translations.id = {
  _meta: {
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
    dir: "ltr"
  },

  nav: {
    stepOf: "Langkah {{current}} dari {{total}}"
  },

  actions: {
    generateGrid: "Buat Grid",
    clearAll: "Hapus Semua",
    export: "Ekspor",
    import: "Impor",
    back: "Kembali",
    insights: "Wawasan",
    save: "Simpan",
    saveChanges: "Simpan Perubahan",
    addAnother: "Tambah Lagi",
    browseAll: "Lihat Semua",
    quickAdd: "Tambah Cepat",
    takeControlNow: "Ambil Kendali Sekarang",
    tryExample: "Coba dengan data contoh",
    neverMissRenewal: "Jangan Pernah Lewatkan Perpanjangan"
  },

  subscriptions: {
    addFirst: "Tambah langganan pertama",
    addFirstHint: "Netflix, Spotify, Gym, dll.",
    addSubscription: "Tambah Langganan",
    editSubscription: "Edit Langganan",
    noSubscriptions: "Tambah langganan untuk melihat visualisasi",
    deleteAll: "Hapus semua langganan?",
    subscriptionCount: "{{count}} langganan",
    subscriptionCountPlural: "{{count}} langganan"
  },

  form: {
    website: "Website (Opsional)",
    websitePlaceholder: "netflix.com",
    serviceName: "Nama Layanan",
    serviceNamePlaceholder: "contoh: Netflix",
    price: "Harga",
    pricePlaceholder: "0.00",
    currency: "Mata Uang",
    cycle: "Siklus",
    color: "Warna",
    cycleMonthly: "Bulanan",
    cycleYearly: "Tahunan",
    cycleWeekly: "Mingguan"
  },

  settings: {
    title: "Pengaturan",
    currency: "Mata Uang",
    currencyHint: "Semua harga akan dikonversi menggunakan kurs perkiraan",
    importExport: "Impor & Ekspor",
    importExportHint: "Cadangkan langganan Anda atau transfer ke perangkat lain",
    language: "Bahasa",
    country: "Wilayah",
    countryHint: "Mengubah harga preset ke harga lokal"
  },

  views: {
    grid: "Grid",
    swarm: "Swarm",
    bubbles: "Gelembung"
  },

  stats: {
    totalMonth: "Total / Bulan",
    yearlyProjection: "Proyeksi Tahunan"
  },

  presets: {
    browse: "Jelajahi Langganan",
    search: "Cari langganan...",
    noResults: "Tidak ada langganan ditemukan",
    all: "Semua"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Musik",
    Gaming: "Gaming",
    AI: "AI",
    Productivity: "Produktivitas",
    Cloud: "Cloud",
    Security: "Keamanan",
    Fitness: "Kebugaran",
    News: "Berita",
    Learning: "Pembelajaran"
  },

  bankImport: {
    title: "Impor Rekening Koran",
    uploadHint: "Unggah file CSV yang diekspor dari bank Anda. Kami akan mendeteksi transaksi berulang yang mungkin langganan.",
    chooseFile: "Pilih file CSV",
    dragDrop: "atau seret dan lepas",
    invalidCsv: "File CSV tidak valid. Pastikan memiliki header dan data transaksi.",
    foundTransactions: "Kami menemukan {{count}} transaksi. Petakan kolomnya:",
    dateColumn: "Kolom Tanggal",
    descriptionColumn: "Kolom Deskripsi / Penerima",
    amountColumn: "Kolom Jumlah",
    preview: "Pratinjau",
    findSubscriptions: "Temukan Langganan",
    foundPotential: "Ditemukan {{count}} langganan potensial. Pilih yang ingin ditambahkan:",
    noRecurring: "Tidak ditemukan transaksi berulang",
    tryBrowsing: "Coba jelajahi transaksi lain di bawah",
    didntFind: "Tidak menemukan sesuatu?",
    browseOther: "Jelajahi {{count}} transaksi lain",
    searchTransactions: "Cari transaksi...",
    noTransactions: "Tidak ada transaksi ditemukan",
    addSelected: "Tambah yang Dipilih",
    addCount: "Tambah {{count}} Langganan",
    addCountPlural: "Tambah {{count}} Langganan",
    foundInStatement: "{{count}}x dalam rekening",
    addedSuccess: "Ditambahkan {{count}} langganan!",
    addedSuccessPlural: "Ditambahkan {{count}} langganan!"
  },

  importExport: {
    restoreBackup: "Pulihkan dari cadangan SubGrid",
    previouslyExported: "File .json yang diekspor sebelumnya",
    importFromBank: "Impor dari rekening koran",
    csvFromBank: "File CSV dari bank Anda",
    importFromCsv: "Impor daftar langganan",
    csvList: "File CSV dengan langganan Anda",
    replaceOrMerge: "Anda memiliki {{existing}} langganan yang ada.\n\nKlik OK untuk menggantinya dengan {{imported}} langganan yang diimpor.\n\nKlik Batal untuk menggabungkan (tambahkan yang diimpor ke yang ada).",
    importSuccess: "Berhasil mengimpor {{count}} langganan!",
    importFailed: "Gagal mengimpor: {{error}}",
    invalidFormat: "Format file tidak valid",
    invalidData: "Data langganan tidak valid"
  },

  subImport: {
    title: "Impor Daftar Langganan",
    uploadHint: "Unggah file CSV dengan langganan Anda. Kami akan membantu Anda memetakan kolom.",
    chooseFile: "Pilih file CSV",
    dragDrop: "atau seret dan lepas",
    tipTitle: "Tips: format CSV",
    tipContent: "CSV Anda harus memiliki kolom untuk nama, harga, dan opsional siklus penagihan. Kami akan mendeteksi sebagian besar format secara otomatis!",
    invalidCsv: "File CSV tidak valid. Pastikan memiliki header dan baris data.",
    foundRows: "Ditemukan",
    rowsMapColumns: "baris. Petakan kolomnya:",
    nameColumn: "Kolom Nama",
    priceColumn: "Kolom Harga / Jumlah",
    cycleColumn: "Kolom Siklus (Opsional)",
    preview: "Pratinjau",
    parseSubscriptions: "Parse Langganan",
    selectColumns: "Silakan pilih setidaknya kolom Nama dan Harga.",
    parsedCount: "Diparse",
    subscriptionsSelect: "langganan. Pilih yang ingin ditambahkan:",
    noValidSubs: "Tidak ditemukan langganan yang valid",
    checkMapping: "Periksa pemetaan kolom Anda",
    addSelected: "Tambah yang Dipilih",
    addCount: "Tambah {{count}} Langganan",
    addCountPlural: "Tambah {{count}} Langganan",
    addedSuccess: "Ditambahkan {{count}} langganan!",
    addedSuccessPlural: "Ditambahkan {{count}} langganan!"
  },

  cta: {
    headline1: "Jangan pernah terkejut dengan",
    headline2: "tagihan tak terduga lagi",
    description: "{{app}} melacak semua langganan Anda di satu tempat dan mengingatkan Anda sebelum setiap perpanjangan. Bergabunglah dengan {{users}}+ pengguna sekarang!",
    autoImport: "Impor otomatis"
  },

  export: {
    exporting: "Mengekspor...",
    failed: "Ekspor gagal: {{error}}"
  },

  visualization: {
    monthlyCost: "Biaya Bulanan"
  },

  hero: {
    headline: "Lihat ke mana uang Anda pergi",
    subheadline: "Visualisasikan semua langganan Anda dalam satu grid yang indah"
  },

  privacy: {
    badge: "Data Anda tetap di browser Anda"
  },

  country: {
    welcome: "Selamat datang!",
    declineButton: "Tidak, tetap USD",
    changeLater: "Anda dapat mengubah ini nanti di Pengaturan"
  }
};
