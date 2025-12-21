const CACHE_VERSION = 'subgrid-v1.3.1';
const CACHE_NAME = `${CACHE_VERSION}`;
const OFFLINE_URL = '/offline.html';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/styles.css',
  '/manifest.json',
  '/js/app.js',
  '/js/storage.js',
  '/js/rates.js',
  '/js/treemap.js',
  '/js/beeswarm.js',
  '/js/circlepack.js',
  '/js/modals.js',
  '/js/presets.js',
  '/js/bank-import.js',
  '/js/theme.js',
  '/js/geolocation.js',
  '/js/clear-data.js',
  '/js/sweetalert-config.js',
  '/icons/favicon-16x16.png',
  '/icons/favicon-32x32.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/apple-touch-icon.png'
];

// CDN resources to cache on first use
const CDN_RESOURCES = [
  'https://cdn.tailwindcss.com',
  'https://code.iconify.design/3/3.1.1/iconify.min.js',
  'https://cdn.jsdelivr.net/npm/modern-screenshot@4.6.7/dist/index.js',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.23.0/sweetalert2.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.23.0/sweetalert2.min.js'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Precaching app shell');
      // Cache offline page first (critical)
      return cache.add(OFFLINE_URL).then(() => {
        // Then cache other assets, but don't fail if some are missing
        return Promise.allSettled(
          PRECACHE_ASSETS.map(url => 
            cache.add(url).catch(err => {
              console.warn(`[ServiceWorker] Failed to cache ${url}:`, err);
            })
          )
        );
      });
    }).then(() => {
      console.log('[ServiceWorker] Skip waiting');
      return self.skipWaiting();
    })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[ServiceWorker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[ServiceWorker] Claiming clients');
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Handle API calls (exchange rates) - Network first, then cache
  if (url.origin === 'https://open.er-api.com') {
    event.respondWith(
      networkFirstStrategy(request, CACHE_NAME)
    );
    return;
  }

  // Handle geolocation APIs - Network first with long cache
  if (url.origin === 'https://ipapi.co' || url.origin === 'https://restcountries.com') {
    event.respondWith(
      networkFirstStrategy(request, CACHE_NAME)
    );
    return;
  }

  // Handle CDN resources - Cache first, then network
  if (CDN_RESOURCES.some(cdn => url.href.startsWith(cdn))) {
    event.respondWith(
      cacheFirstStrategy(request, CACHE_NAME)
    );
    return;
  }

  // Handle navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      cacheFirstStrategy(request, CACHE_NAME)
        .catch(() => {
          // If both cache and network fail, show offline page
          return caches.match(OFFLINE_URL);
        })
    );
    return;
  }

  // Default: Cache first for all other requests
  event.respondWith(
    cacheFirstStrategy(request, CACHE_NAME)
  );
});

// Cache-first strategy: Try cache, fallback to network, then cache response
async function cacheFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    console.log('[ServiceWorker] Serving from cache:', request.url);
    return cached;
  }

  try {
    console.log('[ServiceWorker] Fetching from network:', request.url);
    const response = await fetch(request);
    
    // Cache successful responses
    if (response.ok) {
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[ServiceWorker] Fetch failed:', error);
    throw error;
  }
}

// Network-first strategy: Try network, fallback to cache
async function networkFirstStrategy(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    console.log('[ServiceWorker] Fetching from network (network-first):', request.url);
    const response = await fetch(request);
    
    // Cache successful responses
    if (response.ok) {
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.log('[ServiceWorker] Network failed, trying cache:', request.url);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    throw error;
  }
}

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(event.data.urls);
      })
    );
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }
});

// Periodic background sync (if supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-rates') {
    event.waitUntil(syncExchangeRates());
  }
});

async function syncExchangeRates() {
  try {
    const response = await fetch('https://open.er-api.com/v6/latest/USD');
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put('https://open.er-api.com/v6/latest/USD', response);
      console.log('[ServiceWorker] Exchange rates synced');
    }
  } catch (error) {
    console.error('[ServiceWorker] Failed to sync rates:', error);
  }
}

console.log('[ServiceWorker] Service Worker loaded');
