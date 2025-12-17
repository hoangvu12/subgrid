const CACHE_KEY = "vexly_exchangeRates";
const DATE_KEY = "vexly_ratesLastUpdate";
const ONE_DAY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function getCachedRates() {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        const lastUpdate = localStorage.getItem(DATE_KEY);
        if (!cached) return null;
        return { rates: JSON.parse(cached), lastUpdate: parseInt(lastUpdate) };
    } catch {
        return null;
    }
}

function saveRates(rates) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(rates));
    localStorage.setItem(DATE_KEY, Date.now());
}

async function fetchRatesFromAPI() {
    try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();

        if (data.result === "success" && data.rates) {
            saveRates(data.rates);
            return data.rates;
        }
        throw new Error("Failed to fetch rates");
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        return null;
    }
}

async function loadRates() {
    const cachedRates = getCachedRates();

    if (cachedRates) {
        const timeElapsed = Date.now() - cachedRates.lastUpdate;

        // If cached rates are less than a day old, use them
        if (timeElapsed < ONE_DAY) {
            return cachedRates.rates;
        } else {
            const refreshedRates = await fetchRatesFromAPI();
            return refreshedRates || cachedRates.rates;
        }
    } else {
        const refreshedRates = await fetchRatesFromAPI();
        if (!refreshedRates) {
            console.warn("Failed to fetch rates, falling back to hardcoded rates.");
        }
        return refreshedRates;
    }
}

async function initRates() {
    const rates = await loadRates();
    if (rates && window.currencies) {
        Object.keys(window.currencies).forEach((currency) => {
            if (rates[currency]) {
                window.currencies[currency].rate = rates[currency];
            }
        });
    }
}

window.initRates = initRates;
