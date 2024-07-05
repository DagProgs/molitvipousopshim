importScripts('./workbox-v4.3.1/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: './workbox-v4.3.1/'
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
    "revision": "84da45868d4cbe5a6ba388692b11ab29"
  },
  {
    "url": "manifest.json",
    "revision": "6605f1ea8bf7d4b2c15ab152dc337983"
  },
  {
    "url": "css/style.css",
    "revision": "c63997a633d547a64b04ea2e38aae734"
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
    "url": "pwacompat.min.js",
    "revision": "038770ef3eb91f3e8a50a3916cb7cf28"
  },
  {
    "url": "runtime.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "update.js",
    "revision": "2e37a1e61c0f6c88bddbb61150536944"
  },
  {
    "url": "js/jquery-3.7.1.min.js",
    "revision": "c9a1b0aa0167c8a4df724d18d06814a8"
  },
  {
    "url": "pages/beads/beads.html",
    "revision": "359d9d69ec7608d78d343600e0561df0"
  },
  {
    "url": "pages/book/1.html",
    "revision": "0701e79141d7a33045467dd7470eec6c"
  },
  {
    "url": "pages/book/10.html",
    "revision": "9a174b55c73f7323d7e2957d51cf781e"
  },
  {
    "url": "pages/book/11.html",
    "revision": "73ec9eb43ba2c8bf6e9b8009d5d4d4c6"
  },
  {
    "url": "pages/book/12.html",
    "revision": "99e6e4788bff282d42d5b2b98930e9cc"
  },
  {
    "url": "pages/book/13.html",
    "revision": "eb82041d1832e8be0b96c2b678a3c4c1"
  },
  {
    "url": "pages/book/14.html",
    "revision": "e808de4f1d9f586add12edd479b5d09d"
  },
  {
    "url": "pages/book/15.html",
    "revision": "a77e40a2415dd59891bca69c3e700b16"
  },
  {
    "url": "pages/book/16.html",
    "revision": "831ec060a1175a8f1e61aca61cb1383b"
  },
  {
    "url": "pages/book/2.html",
    "revision": "0ecd836dae2f21f3c8379f434b6d9b93"
  },
  {
    "url": "pages/book/3.html",
    "revision": "713949c7a3a1e9290f609f7423635a76"
  },
  {
    "url": "pages/book/4.html",
    "revision": "09b87f497935d5ac3d06d91c5a95538e"
  },
  {
    "url": "pages/book/5.html",
    "revision": "ead445926a05680b7c4d5cd35e5f736a"
  },
  {
    "url": "pages/book/6.html",
    "revision": "50a70af76feb71d81654f185a4fd0d27"
  },
  {
    "url": "pages/book/7.html",
    "revision": "3b0ace2451731d3c5aa7c1992ca1a384"
  },
  {
    "url": "pages/book/8.html",
    "revision": "75ee541b7947c598f83b6bd42271151b"
  },
  {
    "url": "pages/book/9.html",
    "revision": "1770e80de1ee72212d1fe8713f8bfa57"
  },
  {
    "url": "pages/book/book.html",
    "revision": "292d6e3dd5aab6e7f2059bbb77c67c1f"
  },
  {
    "url": "pages/book/cssbook/book.css",
    "revision": "db6c803f2efd20abc63c03d9e4cdaaca"
  },
  {
    "url": "pages/css/pages.css",
    "revision": "033493c2ded455e3e31bfd411b2473dd"
  },
  {
    "url": "pages/info/info.html",
    "revision": "5522f23289461942f9f905e7a0d6f5a9"
  },
  {
    "url": "pages/man/man.html",
    "revision": "4763699af9a5f349a4c044253fdc28c6"
  },
  {
    "url": "pages/woman/woman.html",
    "revision": "a3644fbf3b97fa84cdd342c4ef833e69"
  },
  {
    "url": "img/names/1.png",
    "revision": "45dca07fc8d03c1d7c574a5445883bdf"
  },
  {
    "url": "img/names/102.png",
    "revision": "39e853586cf338ae3c8ec62a342b675d"
  },
  {
    "url": "img/names/112.png",
    "revision": "d3fcbbfc8c205374e247647824aa2bc2"
  },
  {
    "url": "img/names/113.png",
    "revision": "92dc08693c3aadfb3e5203bfc09e68e3"
  },
  {
    "url": "img/names/114.png",
    "revision": "8668887615362d541272f3f4b550cb87"
  },
  {
    "url": "img/names/13.png",
    "revision": "a9b55deccefe55a1023aa888c3dfcf3f"
  },
  {
    "url": "img/names/2.png",
    "revision": "d8207272d8dbc9b28b432c5aa78549a8"
  },
  {
    "url": "img/names/3.png",
    "revision": "ff5d642d7f85edc8f8235474d36f3b43"
  },
  {
    "url": "img/names/32.png",
    "revision": "56f403815150f70f5953e1b3712b9e47"
  },
  {
    "url": "img/names/36.png",
    "revision": "ece87c83068714f8e128f55befc2e4e2"
  },
  {
    "url": "img/names/4.png",
    "revision": "017edefc63befa331d5afde28a273ab3"
  },
  {
    "url": "img/names/44.png",
    "revision": "8638246aef79c3cc4b088892fe9534fc"
  },
  {
    "url": "img/names/67.png",
    "revision": "ba2d0309ea0fd13cc879f34eb969d1d8"
  },
  {
    "url": "img/names/7.png",
    "revision": "86c585e74813741a50550b21dbf29224"
  },
  {
    "url": "img/names/78.png",
    "revision": "e88dc7067803c69cd40db58d72097495"
  },
  {
    "url": "img/names/97.png",
    "revision": "3847bf43d25ac5484aa926e0ebf688bf"
  },
  {
    "url": "img/surahs/1.webp",
    "revision": "179b1bac716ec33d4ef64ddc9237712e"
  },
  {
    "url": "img/surahs/10.webp",
    "revision": "8aa2e214ecdcfbce0dc5c79314bfe55e"
  },
  {
    "url": "img/surahs/11.webp",
    "revision": "36a0f605b4c209ed4ff110d6138b212a"
  },
  {
    "url": "img/surahs/12.webp",
    "revision": "30b30dc9268c0d2f3db54d6e867d0835"
  },
  {
    "url": "img/surahs/13.webp",
    "revision": "54f7bc9ccf528cd4204e4d6cf795669f"
  },
  {
    "url": "img/surahs/14.webp",
    "revision": "d5385e38b0736a98196149d4282a79bf"
  },
  {
    "url": "img/surahs/15.webp",
    "revision": "43aa597acafa07cf854a48e49d06a001"
  },
  {
    "url": "img/surahs/16.webp",
    "revision": "8789a0380e2b882386d2898234049a6e"
  },
  {
    "url": "img/surahs/17.webp",
    "revision": "3c60536bbc76c94c3209fbf916972261"
  },
  {
    "url": "img/surahs/18.webp",
    "revision": "37135a4f9f264f0354d168a94dc7d81e"
  },
  {
    "url": "img/surahs/19.webp",
    "revision": "b3405c2a683f9d3de08c236110967f1b"
  },
  {
    "url": "img/surahs/2.webp",
    "revision": "b583490a83361c22f5a9c3e521b4530c"
  },
  {
    "url": "img/surahs/20.webp",
    "revision": "7234d00d8c22b80135ec877451b23d5f"
  },
  {
    "url": "img/surahs/3.webp",
    "revision": "a6c966400683a52b3d4b624af1e0f0a0"
  },
  {
    "url": "img/surahs/4.webp",
    "revision": "41f03fd24915217b916016bfc6c04805"
  },
  {
    "url": "img/surahs/5.webp",
    "revision": "1f471b267ef70a6ce2a26908d99ed99c"
  },
  {
    "url": "img/surahs/6.webp",
    "revision": "a326ff18b154453fc017c5d4e527acd1"
  },
  {
    "url": "img/surahs/7.webp",
    "revision": "425ddd76444212670b14b5995da2afde"
  },
  {
    "url": "img/surahs/8.webp",
    "revision": "e433fd5c4649abaf4de943addb47448d"
  },
  {
    "url": "img/surahs/9.webp",
    "revision": "a647ac5e4dd1098b51a4ab98560f3595"
  },
  {
    "url": "img/svg/book.svg",
    "revision": "24e661a9d3401a6237d64ee7a9bedca7"
  },
  {
    "url": "img/svg/information-book.svg",
    "revision": "0019b3481dd030f2b27e712709947687"
  },
  {
    "url": "img/svg/information.svg",
    "revision": "549ba869256f0146f4e4fa023aa8ecf6"
  },
  {
    "url": "img/svg/man-muslim.svg",
    "revision": "19b636137c899893037ed796f0749bda"
  },
  {
    "url": "img/svg/prayer-beads.svg",
    "revision": "30a05157ce3665484f90d80855e51650"
  },
  {
    "url": "img/svg/woman-muslim.svg",
    "revision": "4d2fb394a88eff19ecba6f78f722f01a"
  },
  {
    "url": "img/talqin/man.webp",
    "revision": "bc27595675d8aa559a47ebf8799df435"
  },
  {
    "url": "img/talqin/woman.webp",
    "revision": "9357502f9a8287a314ed5411d8e68f8d"
  },
  {
    "url": "img/zikr.webp",
    "revision": "a64de343268d622de0f678ccbdfd572a"
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
