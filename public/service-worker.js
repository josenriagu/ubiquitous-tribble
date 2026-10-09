// Replaces the offline-caching worker that earlier versions of this site
// registered at this same URL. Browsers that still have the old one fetch this
// file as its update; it removes itself, clears the old caches and reloads the
// open tabs so they show the current site.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister();
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
