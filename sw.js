var GHPATH = '/PAKAR-PRO';

self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    fetch(e.request)
  );
});
