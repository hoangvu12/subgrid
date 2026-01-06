// Korean translations
window.translations = window.translations || {};
window.translations.ko = {
  _meta: {
    name: "Korean",
    nativeName: "한국어",
    dir: "ltr"
  },

  nav: {
    stepOf: "{{current}} / {{total}}"
  },

  actions: {
    generateGrid: "그리드 만들기",
    clearAll: "전체 삭제",
    export: "내보내기",
    import: "가져오기",
    back: "뒤로",
    insights: "분석",
    save: "저장",
    saveChanges: "변경사항 저장",
    addAnother: "하나 더 추가",
    browseAll: "전체 보기",
    quickAdd: "빠른 추가",
    takeControlNow: "지금 시작하기"
  },

  subscriptions: {
    addFirst: "구독을 추가해보세요",
    addFirstHint: "넷플릭스, 스포티파이, 헬스장 등",
    addSubscription: "구독 추가",
    editSubscription: "편집",
    noSubscriptions: "구독을 추가하면 차트가 표시돼요",
    deleteAll: "전부 삭제할까요?",
    subscriptionCount: "{{count}}개",
    subscriptionCountPlural: "{{count}}개"
  },

  form: {
    website: "웹사이트 (선택)",
    websitePlaceholder: "netflix.com",
    serviceName: "서비스 이름",
    serviceNamePlaceholder: "예: 넷플릭스",
    price: "금액",
    pricePlaceholder: "0.00",
    currency: "통화",
    cycle: "결제 주기",
    color: "색상",
    cycleMonthly: "월간",
    cycleYearly: "연간",
    cycleWeekly: "주간"
  },

  settings: {
    title: "설정",
    currency: "통화",
    currencyHint: "대략적인 환율로 변환됩니다",
    importExport: "가져오기 & 내보내기",
    importExportHint: "백업하거나 다른 기기로 옮기기",
    language: "언어"
  },

  views: {
    grid: "그리드",
    swarm: "스웜",
    bubbles: "버블"
  },

  stats: {
    totalMonth: "월 합계",
    yearlyProjection: "연간 예상"
  },

  presets: {
    browse: "서비스 목록에서 선택",
    search: "서비스 검색...",
    noResults: "검색 결과 없음",
    all: "전체"
  },

  categories: {
    Streaming: "영상 스트리밍",
    Music: "음악",
    Gaming: "게임",
    AI: "AI",
    Productivity: "업무 도구",
    Cloud: "클라우드",
    Security: "보안",
    Fitness: "피트니스",
    News: "뉴스",
    Learning: "학습"
  },

  bankImport: {
    title: "은행 내역에서 가져오기",
    uploadHint: "은행에서 내보낸 CSV 파일을 올려주세요. 정기 결제를 자동으로 찾아드려요.",
    chooseFile: "CSV 파일 선택",
    dragDrop: "또는 여기에 끌어다 놓기",
    invalidCsv: "CSV 파일을 읽을 수 없어요. 파일 형식을 확인해주세요.",
    foundTransactions: "{{count}}개 거래를 찾았어요. 각 열을 선택해주세요:",
    dateColumn: "날짜 열",
    descriptionColumn: "내용/결제처 열",
    amountColumn: "금액 열",
    preview: "미리보기",
    findSubscriptions: "구독 찾기",
    foundPotential: "{{count}}개 구독을 찾았어요. 추가할 항목을 선택하세요:",
    noRecurring: "정기 결제를 찾지 못했어요",
    tryBrowsing: "아래에서 다른 거래도 확인해보세요",
    didntFind: "못 찾으셨나요?",
    browseOther: "다른 거래 {{count}}개 보기",
    searchTransactions: "거래 검색...",
    noTransactions: "거래 내역이 없어요",
    addSelected: "선택 항목 추가",
    addCount: "{{count}}개 추가",
    addCountPlural: "{{count}}개 추가",
    foundInStatement: "{{count}}회 결제",
    addedSuccess: "{{count}}개 추가했어요!",
    addedSuccessPlural: "{{count}}개 추가했어요!"
  },

  importExport: {
    restoreBackup: "백업에서 복원",
    previouslyExported: "이전에 내보낸 JSON 파일",
    importFromBank: "은행 내역에서 가져오기",
    csvFromBank: "은행 CSV 파일",
    replaceOrMerge: "{{existing}}개 구독이 있어요.\n\n확인: {{imported}}개로 교체\n취소: 기존에 추가 (합치기)",
    importSuccess: "{{count}}개 가져왔어요!",
    importFailed: "가져오기 실패: {{error}}",
    invalidFormat: "파일 형식이 맞지 않아요",
    invalidData: "데이터를 읽을 수 없어요"
  },

  cta: {
    headline1: "깜빡하고 결제되는 구독료,",
    headline2: "이제 그만!",
    description: "{{app}}으로 모든 구독을 한눈에 관리하세요. 갱신 전 알림으로 불필요한 지출을 막아드려요. {{users}}명 이상 사용 중!",
    autoImport: "자동으로 가져오기"
  },

  export: {
    exporting: "내보내는 중...",
    failed: "내보내기 실패: {{error}}"
  },

  visualization: {
    monthlyCost: "월 비용"
  }
};
