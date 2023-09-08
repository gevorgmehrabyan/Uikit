// service-worker.js
/* eslint-env serviceworker */

const APP_VERSION = self.APP_VERSION;

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    clients.claim(),
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== APP_VERSION) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );

  caches.open(APP_VERSION).then((cache) => cache.addAll(['/']));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then((response) => response || caches.match('/')))
  );
});
