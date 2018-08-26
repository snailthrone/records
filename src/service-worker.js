/* eslint no-console: 0 */
/* eslint no-restricted-globals: 1 */
const cacheName = 'cache-v1'

const filesToCache = [
  './',
  './app.js',
  'img/image_128x128.jpg',
  'img/image_144x144.jpg',
  'img/image_152x152.jpg',
  'img/image_192x192.jpg',
  'img/image_256x256.jpg',
  'img/image_512x512.jpg',
]

self.addEventListener('install', (event) => {
  console.log('Event: Install')
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache)
        .then(() => {
          console.log('All files cached')
        }))
      .catch((error) => {
        console.log('Error occured while caching ', error)
      }),
  )
})

self.addEventListener('activate', (event) => {
  console.log('Event: Activate')
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map((cache) => {
        if (cache !== cacheName) {
          return caches.delete(cache)
        }
        return false
      }),
    )),
  )
})

self.addEventListener('fetch', (event) => {
  console.log('Event: Fetch')
  const { request } = event
  event.respondWith(
    caches.match(request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(request).then((res) => {
          const responseToCache = res.clone()
          caches.open(cacheName).then((cache) => {
            cache.put(request, responseToCache)
          })
          return response
        })
      }),
  )
})
