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
  FR: "France",
  NZ: "New Zealand"
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
  "Asia/Bangkok": "TH"

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
