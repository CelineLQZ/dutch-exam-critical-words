// Vocabulary app service worker — cache-first shell, network-first data.
const CACHE = 'examen-woorden-v1';
const BASE = new URL('./', self.registration.scope).pathname;
const SHELL = [
  './',
  './index.html',
  './styles.css',
  './store.js',
  './tts.js',
  './sentence-grammar-data.js',
  './swipe-deck.jsx',
  './card.jsx',
  './screens.jsx',
  './app.jsx',
  './dictionary.json',
  './manifest.json',
].map(path => new URL(path, self.registration.scope).toString());

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isLocalApp = url.origin === self.location.origin && url.pathname.startsWith(BASE);

  // Data files: network-first (pick up updates), fall back to cache.
  if (url.pathname.endsWith('words.json') || url.pathname.endsWith('readings.json') || url.pathname.endsWith('dictionary.json')) {
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // External CDN (React, fonts): network-first, cache on success
  if (!isLocalApp) {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // App shell: network-first so deployed fixes reach installed/mobile clients.
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok) {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match(e.request))
  );
});
