const cache_name = "infinity-login"
const cache_files = [
    "index.html",
    "zxing-js.js",
    "drawing-svg.js",
    "scan.svg",
    "bwip-js.js",
    "clear.svg",
    "confirm_no.svg",
    "confirm_yes.svg"
]

self.addEventListener("install", (event) => { event.waitUntil(caches.open(cache_name).then((cache) => { return cache.addAll(cache_files)}).catch((error) => { console.error(error) }))})

self.addEventListener("fetch", (event) => { 
    event.respondWith(caches.match(event.request).then((response) => { return response || fetch(event.request)}))
})

