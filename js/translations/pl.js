// Polish translations
window.translations = window.translations || {};
window.translations.pl = {
  _meta: {
    name: "Polish",
    nativeName: "Polski",
    dir: "ltr"
  },

  nav: {
    stepOf: "Krok {{current}} z {{total}}"
  },

  actions: {
    generateGrid: "Generuj siatkę",
    clearAll: "Wyczyść wszystko",
    export: "Eksportuj",
    import: "Importuj",
    back: "Wstecz",
    insights: "Statystyki",
    save: "Zapisz",
    saveChanges: "Zapisz zmiany",
    addAnother: "Dodaj kolejny",
    browseAll: "Przeglądaj wszystkie",
    quickAdd: "Szybkie dodawanie",
    takeControlNow: "Przejmij kontrolę",
    tryExample: "Wypróbuj z przykładowymi danymi",
    neverMissRenewal: "Nigdy nie przegap odnowienia"
  },

  subscriptions: {
    addFirst: "Dodaj pierwszą subskrypcję",
    addFirstHint: "Netflix, Spotify, Siłownia, itp.",
    addSubscription: "Dodaj subskrypcję",
    editSubscription: "Edytuj subskrypcję",
    noSubscriptions: "Dodaj subskrypcje, aby zobaczyć wizualizację",
    deleteAll: "Usunąć wszystkie subskrypcje?",
    subscriptionCount: "{{count}} subskrypcja",
    subscriptionCountPlural: "{{count}} subskrypcji"
  },

  form: {
    website: "Strona (opcjonalnie)",
    websitePlaceholder: "netflix.com",
    serviceName: "Nazwa usługi",
    serviceNamePlaceholder: "np. Netflix",
    price: "Cena",
    pricePlaceholder: "0.00",
    currency: "Waluta",
    cycle: "Cykl",
    color: "Kolor",
    cycleMonthly: "Miesięcznie",
    cycleYearly: "Rocznie",
    cycleWeekly: "Tygodniowo"
  },

  settings: {
    title: "Ustawienia",
    currency: "Waluta",
    currencyHint: "Wszystkie ceny będą przeliczone według przybliżonych kursów wymiany",
    importExport: "Import i eksport",
    importExportHint: "Wykonaj kopię zapasową lub przenieś subskrypcje na inne urządzenie",
    language: "Język",
    country: "Region",
    countryHint: "Zmienia ceny predefiniowane na lokalne"
  },

  views: {
    grid: "Siatka",
    swarm: "Rój",
    bubbles: "Bąbelki"
  },

  stats: {
    totalMonth: "Razem / Miesiąc",
    yearlyProjection: "Prognoza roczna"
  },

  presets: {
    browse: "Przeglądaj subskrypcje",
    search: "Szukaj subskrypcji...",
    noResults: "Nie znaleziono subskrypcji",
    all: "Wszystkie"
  },

  categories: {
    Streaming: "Streaming",
    Music: "Muzyka",
    Gaming: "Gry",
    AI: "AI",
    Productivity: "Produktywność",
    Cloud: "Chmura",
    Security: "Bezpieczeństwo",
    Fitness: "Fitness",
    News: "Wiadomości",
    Learning: "Nauka"
  },

  bankImport: {
    title: "Importuj wyciąg bankowy",
    uploadHint: "Prześlij plik CSV wyeksportowany z banku. Wykryjemy cykliczne transakcje, które mogą być subskrypcjami.",
    chooseFile: "Wybierz plik CSV",
    dragDrop: "lub przeciągnij i upuść",
    invalidCsv: "Nieprawidłowy plik CSV. Upewnij się, że zawiera nagłówki i dane transakcji.",
    foundTransactions: "Znaleźliśmy {{count}} transakcji. Przypisz kolumny:",
    dateColumn: "Kolumna daty",
    descriptionColumn: "Kolumna opisu / odbiorcy",
    amountColumn: "Kolumna kwoty",
    preview: "Podgląd",
    findSubscriptions: "Znajdź subskrypcje",
    foundPotential: "Znaleziono {{count}} potencjalnych subskrypcji. Wybierz, które dodać:",
    noRecurring: "Nie znaleziono cyklicznych transakcji",
    tryBrowsing: "Spróbuj przejrzeć inne transakcje poniżej",
    didntFind: "Nie znalazłeś czegoś?",
    browseOther: "Przeglądaj {{count}} innych transakcji",
    searchTransactions: "Szukaj transakcji...",
    noTransactions: "Nie znaleziono transakcji",
    addSelected: "Dodaj wybrane",
    addCount: "Dodaj {{count}} subskrypcję",
    addCountPlural: "Dodaj {{count}} subskrypcji",
    foundInStatement: "{{count}}x w wyciągu",
    addedSuccess: "Dodano {{count}} subskrypcję!",
    addedSuccessPlural: "Dodano {{count}} subskrypcji!"
  },

  importExport: {
    restoreBackup: "Przywróć z kopii zapasowej SubGrid",
    previouslyExported: "Wcześniej wyeksportowany plik .json",
    importFromBank: "Importuj z wyciągu bankowego",
    csvFromBank: "Plik CSV z Twojego banku",
    importFromCsv: "Importuj listę subskrypcji",
    csvList: "Plik CSV z Twoimi subskrypcjami",
    replaceOrMerge: "Masz {{existing}} istniejących subskrypcji.\n\nKliknij OK, aby zastąpić je {{imported}} zaimportowanymi subskrypcjami.\n\nKliknij Anuluj, aby scalić (dodać zaimportowane do istniejących).",
    importSuccess: "Pomyślnie zaimportowano {{count}} subskrypcji!",
    importFailed: "Import nie powiódł się: {{error}}",
    invalidFormat: "Nieprawidłowy format pliku",
    invalidData: "Nieprawidłowe dane subskrypcji"
  },

  subImport: {
    title: "Importuj listę subskrypcji",
    uploadHint: "Prześlij plik CSV z subskrypcjami. Pomożemy Ci przypisać kolumny.",
    chooseFile: "Wybierz plik CSV",
    dragDrop: "lub przeciągnij i upuść",
    tipTitle: "Wskazówka: format CSV",
    tipContent: "Twój CSV powinien zawierać kolumny z nazwą, ceną i opcjonalnie cyklem rozliczeniowym. Automatycznie wykryjemy większość formatów!",
    invalidCsv: "Nieprawidłowy plik CSV. Upewnij się, że zawiera nagłówki i wiersze danych.",
    foundRows: "Znaleziono",
    rowsMapColumns: "wierszy. Przypisz kolumny:",
    nameColumn: "Kolumna nazwy",
    priceColumn: "Kolumna ceny / kwoty",
    cycleColumn: "Kolumna cyklu (opcjonalnie)",
    preview: "Podgląd",
    parseSubscriptions: "Analizuj subskrypcje",
    selectColumns: "Wybierz przynajmniej kolumnę nazwy i ceny.",
    parsedCount: "Przeanalizowano",
    subscriptionsSelect: "subskrypcji. Wybierz, które dodać:",
    noValidSubs: "Nie znaleziono prawidłowych subskrypcji",
    checkMapping: "Sprawdź przypisanie kolumn",
    addSelected: "Dodaj wybrane",
    addCount: "Dodaj {{count}} subskrypcję",
    addCountPlural: "Dodaj {{count}} subskrypcji",
    addedSuccess: "Dodano {{count}} subskrypcję!",
    addedSuccessPlural: "Dodano {{count}} subskrypcji!"
  },

  cta: {
    headline1: "Nigdy więcej nie daj się zaskoczyć",
    headline2: "nieoczekiwanym opłatom",
    description: "{{app}} śledzi wszystkie Twoje subskrypcje w jednym miejscu i przypomina przed każdym odnowieniem. Dołącz do {{users}}+ użytkowników!",
    autoImport: "Automatycznie importuj swoje"
  },

  export: {
    exporting: "Eksportowanie...",
    failed: "Eksport nie powiódł się: {{error}}"
  },

  visualization: {
    monthlyCost: "Koszt miesięczny"
  },

  hero: {
    headline: "Zobacz, gdzie idą Twoje pieniądze",
    subheadline: "Wizualizuj wszystkie subskrypcje w jednej pięknej siatce"
  },

  privacy: {
    badge: "Twoje dane pozostają w przeglądarce"
  },

  country: {
    welcome: "Witaj!",
    declineButton: "Nie, zostaw USD",
    changeLater: "Możesz to zmienić później w Ustawieniach"
  }
};
