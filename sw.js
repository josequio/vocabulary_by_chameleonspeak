/* const staticCacheName = "mi-cache.v1";

const assets = [
   '/offline.html',
   '/style/header.css'
]

self.addEventListener('install', event => {
   //este cuerpo solo se mostrara, activara cuando se instale el sw, si ya instalo dejara de mostrar al recargar
   event.waitUntil(
      caches.open(staticCacheName).then(cache => {
         cache.addAll(assets)
      })
   );
});


self.addEventListener('fetch', event => {

   event.respondWith(
      caches.match(event.request).then(cacheRes => {
         if(cacheRes){
            return cacheRes
         }else if(!navigator.onLine){
            return caches.match('/offline.html')
         }
         else{
            return fetch(event.request);
         }
      })
   )

}); */


importScripts(
   'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

const { NetworkOnly } = workbox.strategies;
const {setDefaultHandler} = workbox.routing;
const { offlineFallback, staticResourceCache, imageCache } = workbox.recipes;
const { precacheAndRoute } = workbox.precaching;

setDefaultHandler(
   new NetworkOnly()
)

offlineFallback();
staticResourceCache();

/* precacheAndRoute([
   {url: '/index.html', revision: true }
]) */

imageCache();