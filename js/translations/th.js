// Thai translations
window.translations = window.translations || {};
window.translations.th = {
  _meta: {
    name: "Thai",
    nativeName: "ไทย",
    dir: "ltr"
  },

  nav: {
    stepOf: "{{current}} / {{total}}"
  },

  actions: {
    generateGrid: "สร้างกริด",
    clearAll: "ล้างทั้งหมด",
    export: "ส่งออก",
    import: "นำเข้า",
    back: "กลับ",
    insights: "วิเคราะห์",
    save: "บันทึก",
    saveChanges: "บันทึกการเปลี่ยนแปลง",
    addAnother: "เพิ่มอีก",
    browseAll: "ดูทั้งหมด",
    quickAdd: "เพิ่มด่วน",
    takeControlNow: "เริ่มใช้งานเลย"
  },

  subscriptions: {
    addFirst: "เพิ่มรายการแรกของคุณ",
    addFirstHint: "Netflix, Spotify, ฟิตเนส ฯลฯ",
    addSubscription: "เพิ่มรายการ",
    editSubscription: "แก้ไข",
    noSubscriptions: "เพิ่มรายการเพื่อดูกราฟ",
    deleteAll: "ลบทั้งหมดเลยไหม?",
    subscriptionCount: "{{count}} รายการ",
    subscriptionCountPlural: "{{count}} รายการ"
  },

  form: {
    website: "เว็บไซต์ (ไม่บังคับ)",
    websitePlaceholder: "netflix.com",
    serviceName: "ชื่อบริการ",
    serviceNamePlaceholder: "เช่น Netflix",
    price: "ราคา",
    pricePlaceholder: "0.00",
    currency: "สกุลเงิน",
    cycle: "รอบชำระ",
    color: "สี",
    cycleMonthly: "รายเดือน",
    cycleYearly: "รายปี",
    cycleWeekly: "รายสัปดาห์"
  },

  settings: {
    title: "ตั้งค่า",
    currency: "สกุลเงิน",
    currencyHint: "ราคาจะถูกแปลงตามอัตราแลกเปลี่ยนโดยประมาณ",
    importExport: "นำเข้า & ส่งออก",
    importExportHint: "สำรองข้อมูลหรือย้ายไปอุปกรณ์อื่น",
    language: "ภาษา"
  },

  views: {
    grid: "กริด",
    swarm: "กระจาย",
    bubbles: "บับเบิล"
  },

  stats: {
    totalMonth: "รวม/เดือน",
    yearlyProjection: "ประมาณการต่อปี"
  },

  presets: {
    browse: "เลือกจากรายการ",
    search: "ค้นหาบริการ...",
    noResults: "ไม่พบผลลัพธ์",
    all: "ทั้งหมด"
  },

  categories: {
    Streaming: "วิดีโอสตรีมมิ่ง",
    Music: "เพลง",
    Gaming: "เกม",
    AI: "AI",
    Productivity: "เครื่องมือทำงาน",
    Cloud: "คลาวด์",
    Security: "ความปลอดภัย",
    Fitness: "ฟิตเนส",
    News: "ข่าว",
    Learning: "การเรียนรู้"
  },

  bankImport: {
    title: "นำเข้าจากสเตทเมนต์ธนาคาร",
    uploadHint: "อัปโหลดไฟล์ CSV จากธนาคาร ระบบจะช่วยหารายการที่จ่ายเป็นประจำให้",
    chooseFile: "เลือกไฟล์ CSV",
    dragDrop: "หรือลากไฟล์มาวางที่นี่",
    invalidCsv: "อ่านไฟล์ CSV ไม่ได้ ลองเช็คว่าไฟล์ถูกต้องไหมนะ",
    foundTransactions: "เจอ {{count}} รายการ เลือกคอลัมน์ที่ตรงกัน:",
    dateColumn: "คอลัมน์วันที่",
    descriptionColumn: "คอลัมน์รายละเอียด/ร้านค้า",
    amountColumn: "คอลัมน์จำนวนเงิน",
    preview: "ดูตัวอย่าง",
    findSubscriptions: "ค้นหารายการจ่ายประจำ",
    foundPotential: "เจอ {{count}} รายการที่น่าจะเป็นค่าบริการประจำ เลือกที่จะเพิ่ม:",
    noRecurring: "ไม่เจอรายการที่จ่ายซ้ำ",
    tryBrowsing: "ลองดูรายการอื่นๆ ด้านล่างได้นะ",
    didntFind: "ยังไม่เจอ?",
    browseOther: "ดู {{count}} รายการอื่น",
    searchTransactions: "ค้นหารายการ...",
    noTransactions: "ไม่มีรายการ",
    addSelected: "เพิ่มที่เลือก",
    addCount: "เพิ่ม {{count}} รายการ",
    addCountPlural: "เพิ่ม {{count}} รายการ",
    foundInStatement: "เจอ {{count}} ครั้ง",
    addedSuccess: "เพิ่ม {{count}} รายการแล้ว!",
    addedSuccessPlural: "เพิ่ม {{count}} รายการแล้ว!"
  },

  importExport: {
    restoreBackup: "กู้คืนจากแบ็กอัป",
    previouslyExported: "ไฟล์ JSON ที่ส่งออกไว้ก่อนหน้า",
    importFromBank: "นำเข้าจากสเตทเมนต์ธนาคาร",
    csvFromBank: "ไฟล์ CSV จากธนาคาร",
    replaceOrMerge: "คุณมี {{existing}} รายการอยู่แล้ว\n\nกด OK เพื่อแทนที่ด้วย {{imported}} รายการใหม่\nกด Cancel เพื่อรวมกัน (เพิ่มเข้าไปกับรายการเดิม)",
    importSuccess: "นำเข้า {{count}} รายการสำเร็จ!",
    importFailed: "นำเข้าไม่สำเร็จ: {{error}}",
    invalidFormat: "รูปแบบไฟล์ไม่ถูกต้อง",
    invalidData: "อ่านข้อมูลไม่ได้"
  },

  cta: {
    headline1: "ไม่ต้องตกใจกับ",
    headline2: "ค่าบริการที่ลืมยกเลิกอีกต่อไป",
    description: "{{app}} ช่วยติดตามทุกค่าบริการรายเดือนของคุณ แจ้งเตือนก่อนต่ออายุ ไม่พลาดยกเลิก! มีคนใช้แล้วกว่า {{users}}+ คน",
    autoImport: "นำเข้าอัตโนมัติ"
  },

  export: {
    exporting: "กำลังส่งออก...",
    failed: "ส่งออกไม่สำเร็จ: {{error}}"
  },

  visualization: {
    monthlyCost: "ค่าใช้จ่าย/เดือน"
  }
};
