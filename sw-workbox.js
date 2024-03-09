importScripts('workbox-v4.3.0/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: 'workbox-v4.3.0/'
});

// Turn on logging
workbox.setConfig({
  debug: true
});

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "32e8af617c728becc1a0336d7d539112"
  },
  {
    "url": "talkin.html",
    "revision": "fba7d1ba94575dd309ca2709b2f16461"
  },
  {
    "url": "main.js",
    "revision": "80846bb3403b82a07c7f84658f186b23"
  },
  {
    "url": "polyfills.js",
    "revision": "56f34b0f4d3a42d45bfdb1782adaa173"
  },
  {
    "url": "runtime.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "css/main.css",
    "revision": "cc0dc418ef16661a890625d61ed721d4"
  },
  {
    "url": "css/reset.css",
    "revision": "e664e4692436549b260df8d6fe4b09ef"
  },
  {
    "url": "css/style.css",
    "revision": "f90f57ae8e9212c5042ad0a8f6b40e19"
  },
  {
    "url": "js/custom.js",
    "revision": "01b99e4e4f4422ef8c03d882392ad648"
  },
  {
    "url": "js/jquery-1.4.1.min.js",
    "revision": "9eb33df93b21325142088527103882d2"
  },
  {
    "url": "js/script.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "manifest.json",
    "revision": "239a9b3ff9f8e5f9a7d634284b8464eb"
  },
  {
    "url": "assets/icons/icon-128x128.png",
    "revision": "e3119c5e842fe71442fbcab5240d21ca"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "5bf0b1e79e5ac411de3cda6cdcfd48cc"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "6eca45733c84e3112331cc3ec3cfd087"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "87c9908dc43575d0028217a28714f9c6"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "8909c62424de645dc391b63ef75b69aa"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "b92313ba2fafdf3e901564025b2a31ad"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "455463efa24bb0f7c59413959f70ddb3"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "60c0585719ebebb4877a59537966564d"
  }
]);

// RUNTIME CACHING

// Google fonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  workbox.strategies.networkFirst()
)

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  workbox.strategies.cacheFirst()
)

// OTHER EVENTS

// Receive push and show a notification
self.addEventListener('push', function(event) {
  console.log('[Service Worker]: Received push event', event);
});
