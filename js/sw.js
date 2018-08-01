self.addEventListener('install', function(event) {
  //add the resources to cache during install
  event.waitUntil(
    caches.open('restaurant-reviews').then(function(cache) {
      return cache.addAll([
        '/js/main.js',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/restaurant_info.js',
        '/index.html',
        '/restaurant.html',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
      ]);
    }).catch(function(err){
      console.log(err);
    })
  );
});
//get from cache, if not available fetch from online
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});