// Regional pricing data for subscription presets
// Prices are actual local prices (not converted from USD)
// Based on research from late 2025

const regionalPrices = {
  AU: {
    currency: "AUD",
    prices: {
      // Streaming
      Netflix: { price: 20.99 },
      "Disney+": { price: 13.99 },
      "Amazon Prime": { price: 9.99 },
      Max: { price: 16.99 },
      "Paramount+": { price: 9.99 },
      "Apple TV+": { price: 15.99 },
      Peacock: { price: 8.99 },
      Hulu: { price: 13.99 },

      Crunchyroll: { price: 10.99 },

      // Music
      Spotify: { price: 15.99 },
      "Apple Music": { price: 12.99 },
      "YouTube Premium": { price: 16.99 },
      Tidal: { price: 14.99 },
      Audible: { price: 16.45 },

      // Gaming
      "Xbox Game Pass": { price: 18.99 },
      "PlayStation Plus": { price: 13.95 },
      "Nintendo Switch Online": { price: 5.95 },
      "EA Play": { price: 7.99 },

      // AI
      "ChatGPT Plus": { price: 33 },
      "Claude Pro": { price: 33 },
      Midjourney: { price: 15 },
      "GitHub Copilot": { price: 16 },

      // Productivity
      "Adobe Creative Cloud": { price: 89.99 },
      "Microsoft 365": { price: 12.99 },
      Notion: { price: 15 },
      Slack: { price: 12.50 },
      Linear: { price: 12 },
      "Canva Pro": { price: 19.99 },
      Figma: { price: 22 },
      Grammarly: { price: 45 },

      // Cloud Storage
      "iCloud+": { price: 1.49 },
      "Google One": { price: 2.49 },
      Dropbox: { price: 17.99 },

      // Security
      NordVPN: { price: 19.99 },
      ExpressVPN: { price: 20.99 },
      "1Password": { price: 5.99 },

      // Fitness
      Peloton: { price: 19.99 },
      "Apple Fitness+": { price: 14.99 },
      Strava: { price: 15.99 },

      // News/Reading
      "The Athletic": { price: 11.99 },
      "Kindle Unlimited": { price: 13.99 },
      Medium: { price: 8 },

      // Learning
      Duolingo: { price: 15.99 },
      Skillshare: { price: 21.99 },
      "Coursera Plus": { price: 99 }
    }
  },

  GB: {
    currency: "GBP",
    prices: {
      // Streaming
      Netflix: { price: 12.99 },
      "Disney+": { price: 9.99 },
      "Amazon Prime": { price: 8.99 },
      Max: { price: 9.99 },
      "Paramount+": { price: 6.99 },
      "Apple TV+": { price: 8.99 },
      Peacock: { price: 5.99 },
      Hulu: { price: 8.99 },
      Crunchyroll: { price: 6.99 },

      // Music
      Spotify: { price: 12.99 },
      "Apple Music": { price: 10.99 },
      "YouTube Premium": { price: 12.99 },
      Tidal: { price: 10.99 },
      Audible: { price: 7.99 },

      // Gaming
      "Xbox Game Pass": { price: 12.99 },
      "PlayStation Plus": { price: 10.99 },
      "Nintendo Switch Online": { price: 3.49 },
      "EA Play": { price: 5.99 },

      // AI
      "ChatGPT Plus": { price: 18 },
      "Claude Pro": { price: 18 },
      Midjourney: { price: 8 },
      "GitHub Copilot": { price: 8 },

      // Productivity
      "Adobe Creative Cloud": { price: 54.99 },
      "Microsoft 365": { price: 7.99 },
      Notion: { price: 8 },
      Slack: { price: 6.67 },
      Linear: { price: 8 },
      "Canva Pro": { price: 11.99 },
      Figma: { price: 12 },
      Grammarly: { price: 25 },

      // Cloud Storage
      "iCloud+": { price: 0.99 },
      "Google One": { price: 1.59 },
      Dropbox: { price: 9.99 },

      // Security
      NordVPN: { price: 10.99 },
      ExpressVPN: { price: 10.82 },
      "1Password": { price: 2.99 },

      // Fitness
      Peloton: { price: 12.99 },
      "Apple Fitness+": { price: 9.99 },
      Strava: { price: 8.99 },

      // News/Reading
      "The Athletic": { price: 7.99 },
      "Kindle Unlimited": { price: 9.99 },
      Medium: { price: 4 },

      // Learning
      Duolingo: { price: 10.99 },
      Skillshare: { price: 12.99 },
      "Coursera Plus": { price: 49 }
    }
  },

  DE: {
    currency: "EUR",
    prices: {
      // Streaming
      Netflix: { price: 13.99 },
      "Disney+": { price: 10.99 },
      "Amazon Prime": { price: 8.99 },
      "Paramount+": { price: 7.99 },
      "Apple TV+": { price: 9.99 },
      Crunchyroll: { price: 6.99 },

      // Music
      Spotify: { price: 12.99 },
      "Apple Music": { price: 10.99 },
      "YouTube Premium": { price: 14.0 },
      Tidal: { price: 10.99 },
      Audible: { price: 9.95 },

      // Gaming
      "Xbox Game Pass": { price: 14.99 },
      "PlayStation Plus": { price: 11.99 },
      "Nintendo Switch Online": { price: 3.99 },
      "EA Play": { price: 5.99 },

      // AI
      "ChatGPT Plus": { price: 20 },
      "Claude Pro": { price: 20 },
      Midjourney: { price: 10 },
      "GitHub Copilot": { price: 10 },

      // Productivity
      "Adobe Creative Cloud": { price: 63.49 },
      "Microsoft 365": { price: 9.99 },
      Notion: { price: 10 },
      Slack: { price: 7.25 },
      Linear: { price: 8 },
      "Canva Pro": { price: 12.99 },
      Figma: { price: 14 },
      Grammarly: { price: 29 },

      // Cloud Storage
      "iCloud+": { price: 0.99 },
      "Google One": { price: 1.99 },
      Dropbox: { price: 11.99 },

      // Security
      NordVPN: { price: 12.99 },
      ExpressVPN: { price: 12.95 },
      "1Password": { price: 3.49 },

      // Fitness
      Peloton: { price: 12.99 },
      "Apple Fitness+": { price: 9.99 },
      Strava: { price: 11.99 },

      // News/Reading
      "Kindle Unlimited": { price: 11.99 },
      Medium: { price: 5 },

      // Learning
      Duolingo: { price: 13.99 },
      Skillshare: { price: 14.99 },
      "Coursera Plus": { price: 59 }
    }
  },

  CA: {
    currency: "CAD",
    prices: {
      // Streaming
      Netflix: { price: 18.99 },
      "Disney+": { price: 15.99 },
      "Amazon Prime": { price: 9.99 },
      Max: { price: 16.49 },
      "Paramount+": { price: 9.99 },
      "Apple TV+": { price: 12.99 },
      Peacock: { price: 9.99 },
      Hulu: { price: 12.99 },
      Crunchyroll: { price: 9.99 },

      // Music
      Spotify: { price: 12.69 },
      "Apple Music": { price: 10.99 },
      "YouTube Premium": { price: 13.99 },
      Tidal: { price: 11.99 },
      Audible: { price: 14.95 },

      // Gaming
      "Xbox Game Pass": { price: 18.99 },
      "PlayStation Plus": { price: 13.99 },
      "Nintendo Switch Online": { price: 5.49 },
      "EA Play": { price: 6.99 },

      // AI
      "ChatGPT Plus": { price: 28 },
      "Claude Pro": { price: 28 },
      Midjourney: { price: 14 },
      "GitHub Copilot": { price: 14 },

      // Productivity
      "Adobe Creative Cloud": { price: 76.99 },
      "Microsoft 365": { price: 12.99 },
      Notion: { price: 12 },
      Slack: { price: 11 },
      Linear: { price: 12 },
      "Canva Pro": { price: 16.99 },
      Figma: { price: 18 },
      Grammarly: { price: 39 },

      // Cloud Storage
      "iCloud+": { price: 1.29 },
      "Google One": { price: 2.79 },
      Dropbox: { price: 14.99 },

      // Security
      NordVPN: { price: 16.99 },
      ExpressVPN: { price: 17.53 },
      "1Password": { price: 4.49 },

      // Fitness
      Peloton: { price: 17.99 },
      "Apple Fitness+": { price: 12.99 },
      Strava: { price: 14.99 },

      // News/Reading
      "The Athletic": { price: 12.99 },
      "Kindle Unlimited": { price: 12.99 },
      Medium: { price: 7 },

      // Learning
      Duolingo: { price: 17.49 },
      Skillshare: { price: 18.99 },
      "Coursera Plus": { price: 79 }
    }
  },

  JP: {
    currency: "JPY",
    prices: {
      // Streaming
      Netflix: { price: 1590 },
      "Disney+": { price: 990 },
      "Amazon Prime": { price: 600 },
      "Apple TV+": { price: 900 },
      Crunchyroll: { price: 990 },

      // Music
      Spotify: { price: 1080 },
      "Apple Music": { price: 1080 },
      "YouTube Premium": { price: 1280 },
      Tidal: { price: 1980 },
      Audible: { price: 1500 },

      // Gaming
      "Xbox Game Pass": { price: 1100 },
      "PlayStation Plus": { price: 850 },
      "Nintendo Switch Online": { price: 306 },
      "EA Play": { price: 518 },

      // AI
      "ChatGPT Plus": { price: 3000 },
      "Claude Pro": { price: 3000 },
      Midjourney: { price: 1500 },
      "GitHub Copilot": { price: 1500 },

      // Productivity
      "Adobe Creative Cloud": { price: 7780 },
      "Microsoft 365": { price: 1490 },
      Notion: { price: 1200 },
      Slack: { price: 1050 },
      Linear: { price: 1200 },
      "Canva Pro": { price: 1500 },
      Figma: { price: 1800 },
      Grammarly: { price: 1500 },

      // Cloud Storage
      "iCloud+": { price: 130 },
      "Google One": { price: 250 },
      Dropbox: { price: 1500 },

      // Security
      NordVPN: { price: 1970 },
      ExpressVPN: { price: 1950 },
      "1Password": { price: 450 },

      // Fitness
      Peloton: { price: 1980 },
      "Apple Fitness+": { price: 1100 },
      Strava: { price: 900 },

      // News/Reading
      "Kindle Unlimited": { price: 980 },
      Medium: { price: 500 },

      // Learning
      Duolingo: { price: 1100 },
      Skillshare: { price: 1400 },
      "Coursera Plus": { price: 7400 }
    }
  },

  VN: {
    currency: "VND",
    prices: {
      // Streaming - only those available in VN
      Netflix: { price: 231000 },

      // Music - verified VN prices
      Spotify: { price: 65000 },
      "Apple Music": { price: 59000 },
      "YouTube Premium": { price: 79000 },

      // Gaming - available in VN
      "Xbox Game Pass": { price: 249000 },
      "PlayStation Plus": { price: 219000 },
      "Nintendo Switch Online": { price: 99000 },
      "EA Play": { price: 119000 },

      // AI - USD converted (billed in USD but shown in VND)
      "ChatGPT Plus": { price: 500000 },
      "Claude Pro": { price: 500000 },
      Midjourney: { price: 250000 },
      "GitHub Copilot": { price: 250000 },

      // Productivity
      "Microsoft 365": { price: 1299000, cycle: "Yearly" },
      Notion: { price: 250000 },
      "Canva Pro": { price: 300000 },

      // Cloud Storage - verified VN prices
      "iCloud+": { price: 19000 },
      "Google One": { price: 45000 },
      Dropbox: { price: 279000 },

      // Security
      NordVPN: { price: 99000 },
      ExpressVPN: { price: 185000 },

      // Learning
      Duolingo: { price: 159000 }
    }
  },

  TH: {
    currency: "THB",
    prices: {
      // Streaming
      Netflix: { price: 349 },
      "Disney+": { price: 199 },

      // Music
      Spotify: { price: 149 },
      "Apple Music": { price: 139 },
      "YouTube Premium": { price: 179 },

      // Gaming
      "Xbox Game Pass": { price: 199 },

      // AI
      "ChatGPT Plus": { price: 700 },
      "Claude Pro": { price: 700 },

      // Cloud Storage
      "iCloud+": { price: 35 },
      "Google One": { price: 100 }
    }
  },

  // India
  IN: {
    currency: "INR",
    prices: {
      Netflix: { price: 499 },
      Spotify: { price: 199 },
      "YouTube Premium": { price: 129 },
      "Apple Music": { price: 99 },
      "ChatGPT Plus": { price: 2000 },
      "Claude Pro": { price: 2000 },
      "iCloud+": { price: 75 },
      "Google One": { price: 130 }
    }
  },

  // France
  FR: {
    currency: "EUR",
    prices: {
      Netflix: { price: 14.99 },
      Spotify: { price: 10.99 },
      "YouTube Premium": { price: 12.99 },
      "Apple Music": { price: 10.99 },
      "Disney+": { price: 9.99 },
      "ChatGPT Plus": { price: 20 },
      "Claude Pro": { price: 20 },
      "iCloud+": { price: 0.99 },
      "Google One": { price: 1.99 }
    }
  },

  // Spain
  ES: {
    currency: "EUR",
    prices: {
      Netflix: { price: 13.99 },
      Spotify: { price: 11.99 },
      "YouTube Premium": { price: 11.99 },
      "Apple Music": { price: 10.99 },
      "Disney+": { price: 9.99 },
      "ChatGPT Plus": { price: 20 },
      "Claude Pro": { price: 20 },
      "iCloud+": { price: 0.99 },
      "Google One": { price: 1.99 }
    }
  },

  // Poland
  PL: {
    currency: "PLN",
    prices: {
      Netflix: { price: 49 },
      Spotify: { price: 23.99 },
      "YouTube Premium": { price: 26.99 },
      "Apple Music": { price: 21.99 },
      "ChatGPT Plus": { price: 99 },
      "Claude Pro": { price: 99 },
      "iCloud+": { price: 4.99 },
      "Google One": { price: 8.99 }
    }
  },

  // Singapore
  SG: {
    currency: "SGD",
    prices: {
      Netflix: { price: 22.98 },
      Spotify: { price: 10.99 },
      "YouTube Premium": { price: 17.98 },
      "Apple Music": { price: 10.98 },
      "Disney+": { price: 11.98 },
      "ChatGPT Plus": { price: 28 },
      "Claude Pro": { price: 28 },
      "iCloud+": { price: 1.48 },
      "Google One": { price: 2.79 }
    }
  },

  // Netherlands
  NL: {
    currency: "EUR",
    prices: {
      Netflix: { price: 15.99 },
      Spotify: { price: 10.99 },
      "YouTube Premium": { price: 11.99 },
      "Apple Music": { price: 10.99 },
      "Disney+": { price: 10.99 },
      "ChatGPT Plus": { price: 20 },
      "Claude Pro": { price: 20 },
      "iCloud+": { price: 0.99 },
      "Google One": { price: 1.99 }
    }
  },

  // Brazil
  BR: {
    currency: "BRL",
    prices: {
      Netflix: { price: 44.90 },
      Spotify: { price: 21.90 },
      "YouTube Premium": { price: 24.90 },
      "Apple Music": { price: 21.90 },
      "ChatGPT Plus": { price: 110 },
      "Claude Pro": { price: 110 },
      "iCloud+": { price: 3.50 },
      "Google One": { price: 6.99 }
    }
  },

  // Mexico
  MX: {
    currency: "MXN",
    prices: {
      Netflix: { price: 249 },
      Spotify: { price: 115 },
      "YouTube Premium": { price: 129 },
      "Apple Music": { price: 99 },
      "ChatGPT Plus": { price: 399 },
      "Claude Pro": { price: 399 },
      "iCloud+": { price: 17 },
      "Google One": { price: 35 }
    }
  },

  // Italy
  IT: {
    currency: "EUR",
    prices: {
      Netflix: { price: 13.99 },
      Spotify: { price: 10.99 },
      "YouTube Premium": { price: 11.99 },
      "Apple Music": { price: 10.99 },
      "Disney+": { price: 9.99 },
      "ChatGPT Plus": { price: 20 },
      "Claude Pro": { price: 20 },
      "iCloud+": { price: 0.99 },
      "Google One": { price: 1.99 }
    }
  },

  // Sweden
  SE: {
    currency: "SEK",
    prices: {
      Netflix: { price: 149 },
      Spotify: { price: 119 },
      "YouTube Premium": { price: 129 },
      "Apple Music": { price: 119 },
      "ChatGPT Plus": { price: 239 },
      "Claude Pro": { price: 239 },
      "iCloud+": { price: 12 },
      "Google One": { price: 20 }
    }
  },

  // Switzerland
  CH: {
    currency: "CHF",
    prices: {
      Netflix: { price: 22.90 },
      Spotify: { price: 12.95 },
      "YouTube Premium": { price: 15.90 },
      "Apple Music": { price: 12.90 },
      "ChatGPT Plus": { price: 22 },
      "Claude Pro": { price: 22 },
      "iCloud+": { price: 1 },
      "Google One": { price: 2 }
    }
  },

  // Turkey
  TR: {
    currency: "TRY",
    prices: {
      Netflix: { price: 289.99 },
      Spotify: { price: 57.99 },
      "YouTube Premium": { price: 57.99 },
      "Apple Music": { price: 39.99 },
      "ChatGPT Plus": { price: 700 },
      "Claude Pro": { price: 700 },
      "iCloud+": { price: 14.99 },
      "Google One": { price: 19.99 }
    }
  },

  // South Africa
  ZA: {
    currency: "ZAR",
    prices: {
      Netflix: { price: 179 },
      Spotify: { price: 79.99 },
      "YouTube Premium": { price: 71.99 },
      "Apple Music": { price: 59.99 },
      "ChatGPT Plus": { price: 400 },
      "Claude Pro": { price: 400 },
      "iCloud+": { price: 14.99 },
      "Google One": { price: 29.99 }
    }
  },

  // New Zealand
  NZ: {
    currency: "NZD",
    prices: {
      Netflix: { price: 25.99 },
      Spotify: { price: 17.99 },
      "YouTube Premium": { price: 18.99 },
      "Apple Music": { price: 14.99 },
      "Disney+": { price: 14.99 },
      "ChatGPT Plus": { price: 35 },
      "Claude Pro": { price: 35 },
      "iCloud+": { price: 1.69 },
      "Google One": { price: 3.49 }
    }
  },

  // Belgium
  BE: {
    currency: "EUR",
    prices: {
      Netflix: { price: 16.99 },
      Spotify: { price: 10.99 },
      "YouTube Premium": { price: 11.99 },
      "Apple Music": { price: 10.99 },
      "Disney+": { price: 10.99 },
      "ChatGPT Plus": { price: 20 },
      "Claude Pro": { price: 20 },
      "iCloud+": { price: 0.99 },
      "Google One": { price: 1.99 }
    }
  },

  // Saudi Arabia
  SA: {
    currency: "SAR",
    prices: {
      Netflix: { price: 43 },
      Spotify: { price: 25.99 },
      "YouTube Premium": { price: 25.99 },
      "Apple Music": { price: 19.99 },
      "ChatGPT Plus": { price: 85 },
      "Claude Pro": { price: 85 },
      "iCloud+": { price: 3.99 },
      "Google One": { price: 6.99 }
    }
  },

  // Indonesia
  ID: {
    currency: "IDR",
    prices: {
      Netflix: { price: 133200 },
      Spotify: { price: 54990 },
      "YouTube Premium": { price: 59000 },
      "Apple Music": { price: 49000 },
      "ChatGPT Plus": { price: 320000 },
      "Claude Pro": { price: 320000 },
      "iCloud+": { price: 15000 },
      "Google One": { price: 26900 }
    }
  },

  // Malaysia
  MY: {
    currency: "MYR",
    prices: {
      Netflix: { price: 49.90 },
      Spotify: { price: 14.90 },
      "YouTube Premium": { price: 17.90 },
      "Apple Music": { price: 14.90 },
      "Disney+": { price: 13.90 },
      "ChatGPT Plus": { price: 95 },
      "Claude Pro": { price: 95 },
      "iCloud+": { price: 3.90 },
      "Google One": { price: 8.90 }
    }
  },

  // Pakistan
  PK: {
    currency: "PKR",
    prices: {
      Netflix: { price: 800 },
      Spotify: { price: 349 },
      "YouTube Premium": { price: 279 },
      "Apple Music": { price: 250 },
      "ChatGPT Plus": { price: 5600 },
      "Claude Pro": { price: 5600 },
      "iCloud+": { price: 100 },
      "Google One": { price: 200 }
    }
  },

  // Nigeria
  NG: {
    currency: "NGN",
    prices: {
      Netflix: { price: 6500 },
      Spotify: { price: 900 },
      "YouTube Premium": { price: 1100 },
      "Apple Music": { price: 900 },
      "ChatGPT Plus": { price: 32000 },
      "Claude Pro": { price: 32000 },
      "iCloud+": { price: 500 },
      "Google One": { price: 1100 }
    }
  },

  // Czechia
  CZ: {
    currency: "CZK",
    prices: {
      Netflix: { price: 309 },
      Spotify: { price: 159 },
      "YouTube Premium": { price: 179 },
      "Apple Music": { price: 165 },
      "ChatGPT Plus": { price: 550 },
      "Claude Pro": { price: 550 },
      "iCloud+": { price: 25 },
      "Google One": { price: 50 }
    }
  },

  // Romania
  RO: {
    currency: "RON",
    prices: {
      Netflix: { price: 45 },
      Spotify: { price: 24.99 },
      "YouTube Premium": { price: 26 },
      "Apple Music": { price: 24.99 },
      "ChatGPT Plus": { price: 100 },
      "Claude Pro": { price: 100 },
      "iCloud+": { price: 5 },
      "Google One": { price: 10 }
    }
  },

  // Morocco
  MA: {
    currency: "MAD",
    prices: {
      Netflix: { price: 80 },
      Spotify: { price: 49.99 },
      "YouTube Premium": { price: 49.99 },
      "Apple Music": { price: 39.99 },
      "ChatGPT Plus": { price: 220 },
      "Claude Pro": { price: 220 }
    }
  },

  // Sri Lanka
  LK: {
    currency: "LKR",
    prices: {
      // Streaming
      Netflix: { price: 2399 },

      // Music
      Spotify: { price: 749 },
      "Apple Music": { price: 899 },
      "YouTube Premium": { price: 599 },

      // AI
      "ChatGPT Plus": { price: 5990 },
      "Claude Pro": { price: 5990 },

      // Cloud Storage
      "iCloud+": { price: 299 },
      "Google One": { price: 599 }
    }
  },

  // Argentina
  AR: {
    currency: "ARS",
    prices: {
      // Streaming
      Netflix: { price: 11999 },
      "Disney+": { price: 10164 },

      // Music
      Spotify: { price: 3299 },
      "Apple Music": { price: 3499 },
      "YouTube Premium": { price: 3399 },

      // AI
      "ChatGPT Plus": { price: 28000 },
      "Claude Pro": { price: 28000 },

      // Cloud Storage
      "iCloud+": { price: 1399 },
      "Google One": { price: 2799 }
    }
  }
};

// Country display names
const countryNames = {
  US: "United States",
  AU: "Australia",
  GB: "United Kingdom",
  DE: "Germany",
  CA: "Canada",
  JP: "Japan",
  VN: "Vietnam",
  TH: "Thailand",
  IN: "India",
  FR: "France",
  ES: "Spain",
  PL: "Poland",
  SG: "Singapore",
  NL: "Netherlands",
  BR: "Brazil",
  MX: "Mexico",
  IT: "Italy",
  SE: "Sweden",
  CH: "Switzerland",
  TR: "Turkey",
  ZA: "South Africa",
  NZ: "New Zealand",
  BE: "Belgium",
  SA: "Saudi Arabia",
  ID: "Indonesia",
  MY: "Malaysia",
  PK: "Pakistan",
  NG: "Nigeria",
  CZ: "Czechia",
  RO: "Romania",
  MA: "Morocco",
  LK: "Sri Lanka",
  AR: "Argentina"
};

// Timezone to country mapping for detection
const TIMEZONE_COUNTRY_MAP = {
  // Australia
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Australia/Brisbane": "AU",
  "Australia/Perth": "AU",
  "Australia/Adelaide": "AU",
  "Australia/Hobart": "AU",
  "Australia/Darwin": "AU",

  // United Kingdom
  "Europe/London": "GB",

  // Germany
  "Europe/Berlin": "DE",

  // Canada
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "America/Montreal": "CA",
  "America/Edmonton": "CA",
  "America/Winnipeg": "CA",
  "America/Halifax": "CA",

  // Japan
  "Asia/Tokyo": "JP",

  // Vietnam
  "Asia/Ho_Chi_Minh": "VN",
  "Asia/Saigon": "VN",

  // Thailand
  "Asia/Bangkok": "TH",

  // India
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",

  // France
  "Europe/Paris": "FR",

  // Spain
  "Europe/Madrid": "ES",

  // Poland
  "Europe/Warsaw": "PL",

  // Singapore
  "Asia/Singapore": "SG",

  // Netherlands
  "Europe/Amsterdam": "NL",

  // Brazil
  "America/Sao_Paulo": "BR",
  "America/Rio_de_Janeiro": "BR",

  // Mexico
  "America/Mexico_City": "MX",

  // Italy
  "Europe/Rome": "IT",

  // Sweden
  "Europe/Stockholm": "SE",

  // Switzerland
  "Europe/Zurich": "CH",

  // Turkey
  "Europe/Istanbul": "TR",

  // South Africa
  "Africa/Johannesburg": "ZA",

  // New Zealand
  "Pacific/Auckland": "NZ",

  // Belgium
  "Europe/Brussels": "BE",

  // Saudi Arabia
  "Asia/Riyadh": "SA",

  // Indonesia
  "Asia/Jakarta": "ID",

  // Malaysia
  "Asia/Kuala_Lumpur": "MY",

  // Pakistan
  "Asia/Karachi": "PK",

  // Nigeria
  "Africa/Lagos": "NG",

  // Czechia
  "Europe/Prague": "CZ",

  // Romania
  "Europe/Bucharest": "RO",

  // Morocco
  "Africa/Casablanca": "MA",

  // Sri Lanka
  "Asia/Colombo": "LK",

  // Argentina
  "America/Buenos_Aires": "AR",
  "America/Argentina/Buenos_Aires": "AR",
  "America/Argentina/Cordoba": "AR",
  "America/Argentina/Mendoza": "AR",
  "America/Argentina/Salta": "AR",
  "America/Argentina/Tucuman": "AR"

  // US timezones intentionally not mapped - will default to USD
};

// Get regional price for a service, returns null if not available
function getRegionalPrice(serviceName, countryCode) {
  const region = regionalPrices[countryCode];
  if (region && region.prices && region.prices[serviceName]) {
    return {
      price: region.prices[serviceName].price,
      currency: region.currency
    };
  }
  return null;
}

// Convert country code to flag emoji
function countryToFlag(countryCode) {
  if (!countryCode || countryCode.length !== 2) return "🌍";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}
