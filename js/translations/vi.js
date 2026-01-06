// Vietnamese translations
window.translations = window.translations || {};
window.translations.vi = {
  _meta: {
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
    dir: "ltr"
  },

  nav: {
    stepOf: "Bước {{current}}/{{total}}"
  },

  actions: {
    generateGrid: "Tạo lưới",
    clearAll: "Xoá hết",
    export: "Xuất file",
    import: "Nhập file",
    back: "Quay lại",
    insights: "Thống kê",
    save: "Lưu",
    saveChanges: "Lưu thay đổi",
    addAnother: "Thêm tiếp",
    browseAll: "Xem tất cả",
    quickAdd: "Thêm nhanh",
    takeControlNow: "Bắt đầu ngay"
  },

  subscriptions: {
    addFirst: "Thêm gói đầu tiên",
    addFirstHint: "Netflix, Spotify, Gym...",
    addSubscription: "Thêm gói",
    editSubscription: "Chỉnh sửa",
    noSubscriptions: "Thêm gói để xem biểu đồ",
    deleteAll: "Xoá tất cả?",
    subscriptionCount: "{{count}} gói",
    subscriptionCountPlural: "{{count}} gói"
  },

  form: {
    website: "Website (tuỳ chọn)",
    websitePlaceholder: "netflix.com",
    serviceName: "Tên dịch vụ",
    serviceNamePlaceholder: "VD: Netflix",
    price: "Giá",
    pricePlaceholder: "0.00",
    currency: "Đơn vị tiền",
    cycle: "Chu kỳ",
    color: "Màu",
    cycleMonthly: "Theo tháng",
    cycleYearly: "Theo năm",
    cycleWeekly: "Theo tuần"
  },

  settings: {
    title: "Cài đặt",
    currency: "Đơn vị tiền",
    currencyHint: "Giá sẽ được quy đổi theo tỷ giá ước tính",
    importExport: "Nhập & Xuất dữ liệu",
    importExportHint: "Sao lưu hoặc chuyển dữ liệu sang thiết bị khác",
    language: "Ngôn ngữ"
  },

  views: {
    grid: "Lưới",
    swarm: "Phân tán",
    bubbles: "Bong bóng"
  },

  stats: {
    totalMonth: "Tổng/tháng",
    yearlyProjection: "Ước tính cả năm"
  },

  presets: {
    browse: "Chọn từ danh sách",
    search: "Tìm dịch vụ...",
    noResults: "Không tìm thấy",
    all: "Tất cả"
  },

  categories: {
    Streaming: "Phim & Video",
    Music: "Nhạc",
    Gaming: "Game",
    AI: "AI",
    Productivity: "Công việc",
    Cloud: "Lưu trữ đám mây",
    Security: "Bảo mật",
    Fitness: "Thể dục",
    News: "Tin tức",
    Learning: "Học tập"
  },

  bankImport: {
    title: "Nhập từ sao kê ngân hàng",
    uploadHint: "Tải lên file CSV từ ngân hàng. Hệ thống sẽ tự động tìm các giao dịch định kỳ.",
    chooseFile: "Chọn file CSV",
    dragDrop: "hoặc kéo thả vào đây",
    invalidCsv: "File CSV không hợp lệ. Kiểm tra lại xem file có đúng định dạng không nhé.",
    foundTransactions: "Tìm thấy {{count}} giao dịch. Chọn cột tương ứng:",
    dateColumn: "Cột ngày",
    descriptionColumn: "Cột mô tả",
    amountColumn: "Cột số tiền",
    preview: "Xem trước",
    findSubscriptions: "Tìm gói đăng ký",
    foundPotential: "Tìm thấy {{count}} gói có thể là đăng ký. Chọn để thêm:",
    noRecurring: "Không tìm thấy giao dịch định kỳ nào",
    tryBrowsing: "Thử xem các giao dịch khác bên dưới",
    didntFind: "Chưa thấy?",
    browseOther: "Xem {{count}} giao dịch khác",
    searchTransactions: "Tìm giao dịch...",
    noTransactions: "Không có giao dịch nào",
    addSelected: "Thêm đã chọn",
    addCount: "Thêm {{count}} gói",
    addCountPlural: "Thêm {{count}} gói",
    foundInStatement: "Xuất hiện {{count}} lần",
    addedSuccess: "Đã thêm {{count}} gói!",
    addedSuccessPlural: "Đã thêm {{count}} gói!"
  },

  importExport: {
    restoreBackup: "Khôi phục từ bản sao lưu",
    previouslyExported: "File .json đã xuất trước đó",
    importFromBank: "Nhập từ sao kê ngân hàng",
    csvFromBank: "File CSV từ ngân hàng",
    replaceOrMerge: "Bạn đang có {{existing}} gói.\n\nNhấn OK để thay thế bằng {{imported}} gói mới.\n\nNhấn Huỷ để gộp (giữ cả cũ và mới).",
    importSuccess: "Đã nhập {{count}} gói!",
    importFailed: "Lỗi: {{error}}",
    invalidFormat: "File không đúng định dạng",
    invalidData: "Dữ liệu không hợp lệ"
  },

  cta: {
    headline1: "Đừng để bị bất ngờ bởi",
    headline2: "những khoản phí tự động gia hạn",
    description: "{{app}} giúp bạn theo dõi mọi gói đăng ký và nhắc nhở trước khi gia hạn. Hơn {{users}} người đã dùng!",
    autoImport: "Tự động nhập từ"
  },

  export: {
    exporting: "Đang xuất...",
    failed: "Xuất thất bại: {{error}}"
  },

  visualization: {
    monthlyCost: "Chi phí/tháng"
  }
};
