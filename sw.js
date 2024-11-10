self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          'index.html',
          'css/styles.css',
          'sw.js',
          'manifest.json',
          'image/192x192.png',
          'image/512x512.png',
		  'image/maskable_icon.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });

self.addEventListener('fetch', function(event) {
  // Do nothing
});

  