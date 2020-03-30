// This is the "Offline page" service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

const CACHE = "pwabuilder-page";


var cacheName = 'prodigedigital-v1';
var appShellFiles = [
  '/index.html',
  '/about-us.html',
  '/blog.html',
  '/contact.html',
  '/elements.html',
  '/portfolio.html',
  '/service.html',
  '/single-blog.html',
  '/thankyou.html',
  '/css/bootstrap.min.css',
  '/css/font-awesome.min.css',
  '/css/responsive.css',
  '/css/style.css',
  '/font-icons/fontello.eot',
  '/font-icons/fontello.svg',
  '/font-icons/fontello.ttf',
  '/font-icons/fontello.woff',
  '/font-icons/fontello.woff2',
  '/fonts/FontAwesome.otf',
  '/fonts/fontawesome-webfont.eot',
  '/fonts/fontawesome-webfont.svg',
  '/fonts/fontawesome-webfont.ttf',
  '/fonts/fontawesome-webfont.woff',
  '/fonts/fontawesome-webfont.woff2',
  '/js/bootstrap.min.js',
  '/js/circle-active.js',
  '/js/jquery-3.2.1.min.js',
  '/js/popper.min.js',
  '/js/smoothscroll.js',
  '/js/theme.js',
  '/img/3d-shap.png',
  '/img/3d-slider-shap.png',
  '/img/footer-bg.jpg',
  '/img/world-map.jpg',
  '/img/banner/banner-bg.jpg',
  '/img/home-slider/slider-1.svg',
  '/img/home-slider/slider-1-og.svg',
  '/img/home-slider/slider-2.svg',
  '/img/home-slider/slider-2-og.svg',
  '/img/home-slider/slider-3.svg',
  '/img/home-slider/slider-3-og.svg',
  '/img/home-slider/slider-bg-1.png',
  '/img/home-slider/slider-m-1.png',
  '/img/icon/f-icon-1.png',
  '/img/icon/f-icon-2.png',
  '/img/icon/f-icon-3.png',
  '/img/icon/f-icon-4.png',
  '/img/icon/f-icon-5.png',
  '/img/icon/f-icon-6.png',
  '/img/icon/quote-icon.png',
  '/img/icon/title-icon.png',
  '/img/icon/video-icon.png',
  '/img/svg/about.svg',
  '/img/svg-icons/brand-identity.svg',
  '/img/svg-icons/e-com.svg',
  '/img/svg-icons/marketing-campaigns.svg',
  '/img/svg-icons/web-design.svg',
  '/img/svg-icons/web-dev.svg',
  '/img/_fav-icon.png',
  '/img/icon-72x72.png',
  '/img/icon-96x96.png',
  '/img/icon-128x128.png',
  '/img/icon-144x144.png',
  '/img/icon-152x152.png',
  '/img/icon-192x192.png',
  '/img/icon-384x384.png',
  '/img/icon-512x512.png',

];

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "index.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  // event.waitUntil(
  //   caches.open(CACHE)
  //     .then((cache) => cache.add(offlineFallbackPage))
  // );

  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();

});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});
