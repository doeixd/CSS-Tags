// CSS Tags Documentation - Service Worker
// Optimized caching strategy for fast, offline-capable documentation

const CACHE_VERSION = 'v1';
const STATIC_CACHE = `css-tags-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `css-tags-dynamic-${CACHE_VERSION}`;
const SEARCH_CACHE = `css-tags-search-${CACHE_VERSION}`;

// Assets to precache on service worker install
const PRECACHE_ASSETS = [
  '/CSS-Tags/',
  '/CSS-Tags/styles.css',
];

// Cache strategies by resource type
const CACHE_STRATEGIES = {
  // Static assets: Cache first (fonts, images, CSS, JS)
  static: /\.(woff2?|ttf|eot|svg|png|jpg|jpeg|gif|webp|ico|css|js)$/,

  // Search index: Stale-while-revalidate (pagefind)
  search: /\/pagefind\//,

  // HTML pages: Network first with cache fallback
  pages: /\.html?$/,
};

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');

  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Precaching critical assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting()) // Activate immediately
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              // Delete old versions of our caches
              return name.startsWith('css-tags-') &&
                     !name.includes(CACHE_VERSION);
            })
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim()) // Take control immediately
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other non-http(s) requests
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // Determine strategy based on request type
  if (CACHE_STRATEGIES.static.test(url.pathname)) {
    // Static assets: Cache first, network fallback
    event.respondWith(cacheFirst(request, STATIC_CACHE));
  } else if (CACHE_STRATEGIES.search.test(url.pathname)) {
    // Search index: Stale-while-revalidate
    event.respondWith(staleWhileRevalidate(request, SEARCH_CACHE));
  } else if (CACHE_STRATEGIES.pages.test(url.pathname) || url.pathname.endsWith('/')) {
    // HTML pages: Network first, cache fallback
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  } else {
    // Everything else: Network first with cache fallback
    event.respondWith(networkFirst(request, DYNAMIC_CACHE));
  }
});

// Strategy: Cache first (for static assets that rarely change)
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  if (cached) {
    // Return cached version immediately
    return cached;
  }

  try {
    // Fetch from network and cache
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.error('[SW] Cache first failed:', error);
    throw error;
  }
}

// Strategy: Network first (for HTML pages that should be fresh)
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);

  try {
    // Try network first
    const response = await fetch(request);

    if (response.ok) {
      // Cache successful response
      cache.put(request, response.clone());
    }

    return response;
  } catch (error) {
    // Network failed, try cache
    const cached = await cache.match(request);

    if (cached) {
      console.log('[SW] Network failed, returning cached version');
      return cached;
    }

    // No cache available, show offline page
    console.error('[SW] Network first failed, no cache available:', error);
    throw error;
  }
}

// Strategy: Stale-while-revalidate (for search index)
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  // Fetch fresh version in background
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch((error) => {
      console.error('[SW] Background fetch failed:', error);
      return null;
    });

  // Return cached version immediately if available
  if (cached) {
    return cached;
  }

  // Otherwise wait for network
  return fetchPromise;
}

// Message handler for manual cache updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => caches.delete(name))
        );
      })
    );
  }
});
