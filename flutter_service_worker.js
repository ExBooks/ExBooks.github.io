'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3e98b7080c85e84b6358db8827d3bcf0",
"assets/AssetManifest.bin.json": "84d695f8e363c1ec6e6f3e165d32ed04",
"assets/AssetManifest.json": "396b986335842d9626e4001e7ff93a90",
"assets/assets/fonts/Glazio-ExtrudeRight_demo.otf": "2916df5a049843a59ec2c4b72ca9e7e5",
"assets/assets/fonts/Hallory-ExtrudeRight_demo.otf": "53ae00438a6d9685cde2097f0cf923f6",
"assets/assets/fonts/segoepr.ttf": "d7abfa52675c67654ecc2a8213bc58ae",
"assets/assets/Icons/add.svg": "4128cd53005f7b7708d7ff819f5c984a",
"assets/assets/Icons/add_friend.svg": "7d759abcdd5e6fac4eecc3782f973c47",
"assets/assets/Icons/bar_code.svg": "cf30e0ee5b19f77975efe23f83b9197b",
"assets/assets/Icons/book-plus.png": "2dfabecd6d6febfae1f935330427e8b8",
"assets/assets/Icons/book.png": "fc020706022f70204fcc90cc248d0dcc",
"assets/assets/Icons/camera.svg": "1e48fd6a35868a5e5c0e40e7533530b4",
"assets/assets/Icons/category.svg": "53eff5b2236bfdf04e6c8c49458d1c46",
"assets/assets/Icons/chat.svg": "31a3bc49e445af28c09048a32b2735ae",
"assets/assets/Icons/coin.png": "446133bb51f5222994540a072282ff84",
"assets/assets/Icons/default_book_image.svg": "00f95ff709cefed460ef91da6e01ff48",
"assets/assets/Icons/flash_off.svg": "60417a3402cd0efbbb48fffb58f50bab",
"assets/assets/Icons/flash_on.svg": "86fe0dbdea4c1f89705e25f926dca89d",
"assets/assets/Icons/home.svg": "8d423301bbf602820661b0de2cea1944",
"assets/assets/Icons/language.svg": "728e23b7a2cf26add71812b7693ece87",
"assets/assets/Icons/menu.svg": "2902cf7c469232a01f37ed1c74bff518",
"assets/assets/Icons/profile.svg": "136e3983b2cda9f43cf5cf4291e51cd3",
"assets/assets/Icons/search.svg": "484e8d2f2cc4fd4ff9a3c354038ffb4b",
"assets/assets/Icons/title.png": "6898c14550e342e10050e669f4283a92",
"assets/assets/Icons/writer.svg": "c53e400d3e680b3e346fda5413419f93",
"assets/assets/images/authorization.png": "0643bb661c7b391006fc81d35ac382ac",
"assets/assets/images/Barcode.png": "6fa8c946088c3e5d4479f222bb5d3b9e",
"assets/assets/images/email.jfif": "4ef2b17a6a5c8d8917f9f50dc8a11100",
"assets/assets/images/isbn-tanscription.png": "45a6455c81f1f859ade7797d913d0f07",
"assets/assets/images/registration.png": "3ec7e3b958d53926daa4ae5e720e6ccb",
"assets/assets/images/registration1.jpg": "842e35eabeb058dea69c902c36401afa",
"assets/FontManifest.json": "e927492d20125e8680c86799bcd8428e",
"assets/fonts/MaterialIcons-Regular.otf": "9b2c7536e492a9cb005ce758a998c6b9",
"assets/NOTICES": "6af7b9a0a00370b92e314b7742a43bc5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.ico": "ee9073d22c978540b4704b5fc3113af3",
"favicon.png": "e6e9dfc92de12e25d9eac06935a7b466",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "cbd11cb38c85a8d2d7d4b38c413ab8f4",
"icons/Icon-192.png": "da8112bc596ff0f5889365a97aa187ef",
"icons/Icon-512.png": "3ab99cc241565631379080f993a72777",
"icons/Icon-maskable-192.png": "da8112bc596ff0f5889365a97aa187ef",
"icons/Icon-maskable-512.png": "3ab99cc241565631379080f993a72777",
"index.html": "efd7274be386463322fefca6042aa7fa",
"/": "efd7274be386463322fefca6042aa7fa",
"main.dart.js": "62c1dfcdab15c1dcdedea0da00d2760e",
"manifest.json": "5a9747baf45f0966d71d231a2860a842",
"version.json": "2efed1598d98b0f845f2c34724024793"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
