// Hindi translations
window.translations = window.translations || {};
window.translations.hi = {
  _meta: {
    name: "Hindi",
    nativeName: "हिन्दी",
    dir: "ltr"
  },

  nav: {
    stepOf: "चरण {{current}} / {{total}}"
  },

  actions: {
    generateGrid: "ग्रिड बनाएं",
    clearAll: "सब साफ करें",
    export: "निर्यात",
    import: "आयात",
    back: "वापस",
    insights: "जानकारी",
    save: "सहेजें",
    saveChanges: "परिवर्तन सहेजें",
    addAnother: "और जोड़ें",
    browseAll: "सभी देखें",
    quickAdd: "त्वरित जोड़ें",
    takeControlNow: "अभी नियंत्रण लें",
    tryExample: "उदाहरण डेटा के साथ आज़माएं",
    neverMissRenewal: "कभी भी नवीनीकरण न चूकें"
  },

  subscriptions: {
    addFirst: "पहली सदस्यता जोड़ें",
    addFirstHint: "Netflix, Spotify, जिम, आदि।",
    addSubscription: "सदस्यता जोड़ें",
    editSubscription: "सदस्यता संपादित करें",
    noSubscriptions: "विज़ुअलाइज़ेशन देखने के लिए सदस्यताएं जोड़ें",
    deleteAll: "सभी सदस्यताएं हटाएं?",
    subscriptionCount: "{{count}} सदस्यता",
    subscriptionCountPlural: "{{count}} सदस्यताएं"
  },

  form: {
    website: "वेबसाइट (वैकल्पिक)",
    websitePlaceholder: "netflix.com",
    serviceName: "सेवा का नाम",
    serviceNamePlaceholder: "जैसे Netflix",
    price: "कीमत",
    pricePlaceholder: "0.00",
    currency: "मुद्रा",
    cycle: "चक्र",
    color: "रंग",
    cycleMonthly: "मासिक",
    cycleYearly: "वार्षिक",
    cycleWeekly: "साप्ताहिक"
  },

  settings: {
    title: "सेटिंग्स",
    currency: "मुद्रा",
    currencyHint: "सभी कीमतें अनुमानित विनिमय दरों का उपयोग करके परिवर्तित की जाएंगी",
    importExport: "आयात और निर्यात",
    importExportHint: "अपनी सदस्यताओं का बैकअप लें या उन्हें दूसरे डिवाइस पर स्थानांतरित करें",
    language: "भाषा",
    country: "क्षेत्र",
    countryHint: "प्रीसेट कीमतों को स्थानीय कीमतों में बदलता है"
  },

  views: {
    grid: "ग्रिड",
    swarm: "झुंड",
    bubbles: "बुलबुले"
  },

  stats: {
    totalMonth: "कुल / माह",
    yearlyProjection: "वार्षिक अनुमान"
  },

  presets: {
    browse: "सदस्यताएं ब्राउज़ करें",
    search: "सदस्यताएं खोजें...",
    noResults: "कोई सदस्यता नहीं मिली",
    all: "सभी"
  },

  categories: {
    Streaming: "स्ट्रीमिंग",
    Music: "संगीत",
    Gaming: "गेमिंग",
    AI: "AI",
    Productivity: "उत्पादकता",
    Cloud: "क्लाउड",
    Security: "सुरक्षा",
    Fitness: "फिटनेस",
    News: "समाचार",
    Learning: "शिक्षा"
  },

  bankImport: {
    title: "बैंक स्टेटमेंट आयात करें",
    uploadHint: "अपने बैंक से निर्यात की गई CSV फ़ाइल अपलोड करें। हम आवर्ती लेनदेन का पता लगाएंगे जो सदस्यताएं हो सकती हैं।",
    chooseFile: "CSV फ़ाइल चुनें",
    dragDrop: "या खींचें और छोड़ें",
    invalidCsv: "अमान्य CSV फ़ाइल। सुनिश्चित करें कि इसमें हेडर और लेनदेन डेटा है।",
    foundTransactions: "हमें {{count}} लेनदेन मिले। कॉलम मैप करें:",
    dateColumn: "दिनांक कॉलम",
    descriptionColumn: "विवरण / प्राप्तकर्ता कॉलम",
    amountColumn: "राशि कॉलम",
    preview: "पूर्वावलोकन",
    findSubscriptions: "सदस्यताएं खोजें",
    foundPotential: "{{count}} संभावित सदस्यताएं मिलीं। चुनें कौन सी जोड़नी हैं:",
    noRecurring: "कोई आवर्ती लेनदेन नहीं मिला",
    tryBrowsing: "नीचे अन्य लेनदेन ब्राउज़ करने का प्रयास करें",
    didntFind: "कुछ नहीं मिला?",
    browseOther: "{{count}} अन्य लेनदेन ब्राउज़ करें",
    searchTransactions: "लेनदेन खोजें...",
    noTransactions: "कोई लेनदेन नहीं मिला",
    addSelected: "चयनित जोड़ें",
    addCount: "{{count}} सदस्यता जोड़ें",
    addCountPlural: "{{count}} सदस्यताएं जोड़ें",
    foundInStatement: "स्टेटमेंट में {{count}}x",
    addedSuccess: "{{count}} सदस्यता जोड़ी गई!",
    addedSuccessPlural: "{{count}} सदस्यताएं जोड़ी गईं!"
  },

  importExport: {
    restoreBackup: "SubGrid बैकअप से पुनर्स्थापित करें",
    previouslyExported: "पहले निर्यात की गई .json फ़ाइल",
    importFromBank: "बैंक स्टेटमेंट से आयात करें",
    csvFromBank: "आपके बैंक से CSV फ़ाइल",
    importFromCsv: "सदस्यता सूची आयात करें",
    csvList: "आपकी सदस्यताओं के साथ CSV फ़ाइल",
    replaceOrMerge: "आपके पास {{existing}} मौजूदा सदस्यताएं हैं।\n\nउन्हें {{imported}} आयातित सदस्यताओं से बदलने के लिए ओके क्लिक करें।\n\nमर्ज करने के लिए रद्द करें क्लिक करें (आयातित को मौजूदा में जोड़ें)।",
    importSuccess: "{{count}} सदस्यताएं सफलतापूर्वक आयात की गईं!",
    importFailed: "आयात विफल: {{error}}",
    invalidFormat: "अमान्य फ़ाइल प्रारूप",
    invalidData: "अमान्य सदस्यता डेटा"
  },

  subImport: {
    title: "सदस्यता सूची आयात करें",
    uploadHint: "अपनी सदस्यताओं के साथ एक CSV फ़ाइल अपलोड करें। हम कॉलम मैप करने में आपकी मदद करेंगे।",
    chooseFile: "CSV फ़ाइल चुनें",
    dragDrop: "या खींचें और छोड़ें",
    tipTitle: "टिप: CSV प्रारूप",
    tipContent: "आपकी CSV में नाम, कीमत और वैकल्पिक रूप से बिलिंग चक्र के लिए कॉलम होने चाहिए। हम अधिकांश प्रारूपों का स्वचालित रूप से पता लगाएंगे!",
    invalidCsv: "अमान्य CSV फ़ाइल। सुनिश्चित करें कि इसमें हेडर और डेटा पंक्तियां हैं।",
    foundRows: "मिला",
    rowsMapColumns: "पंक्तियां। कॉलम मैप करें:",
    nameColumn: "नाम कॉलम",
    priceColumn: "कीमत / राशि कॉलम",
    cycleColumn: "चक्र कॉलम (वैकल्पिक)",
    preview: "पूर्वावलोकन",
    parseSubscriptions: "सदस्यताएं पार्स करें",
    selectColumns: "कृपया कम से कम नाम और कीमत कॉलम चुनें।",
    parsedCount: "पार्स किया",
    subscriptionsSelect: "सदस्यताएं। चुनें कौन सी जोड़नी हैं:",
    noValidSubs: "कोई वैध सदस्यता नहीं मिली",
    checkMapping: "अपनी कॉलम मैपिंग जांचें",
    addSelected: "चयनित जोड़ें",
    addCount: "{{count}} सदस्यता जोड़ें",
    addCountPlural: "{{count}} सदस्यताएं जोड़ें",
    addedSuccess: "{{count}} सदस्यता जोड़ी गई!",
    addedSuccessPlural: "{{count}} सदस्यताएं जोड़ी गईं!"
  },

  cta: {
    headline1: "अप्रत्याशित शुल्कों से",
    headline2: "फिर कभी चौंकें नहीं",
    description: "{{app}} आपकी सभी सदस्यताओं को एक जगह ट्रैक करता है और हर नवीनीकरण से पहले आपको याद दिलाता है। अभी {{users}}+ उपयोगकर्ताओं से जुड़ें!",
    autoImport: "स्वचालित रूप से आयात करें"
  },

  export: {
    exporting: "निर्यात हो रहा है...",
    failed: "निर्यात विफल: {{error}}"
  },

  visualization: {
    monthlyCost: "मासिक लागत"
  },

  hero: {
    headline: "देखें आपका पैसा कहां जाता है",
    subheadline: "अपनी सभी सदस्यताओं को एक सुंदर ग्रिड में विज़ुअलाइज़ करें"
  },

  privacy: {
    badge: "आपका डेटा आपके ब्राउज़र में रहता है"
  },

  country: {
    welcome: "स्वागत है!",
    declineButton: "नहीं, USD रखें",
    changeLater: "आप इसे बाद में सेटिंग्स में बदल सकते हैं"
  }
};
