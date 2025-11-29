const CACHE_NAME = "dps-cache-v1";

const FILES_TO_CACHE = [
  "./index.html",
  "./simulation.html",
  "./about.html",
  "./style.css",
  "./manifest.json",
  "./dps_logo-192.png",
  "./dps_logo-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
