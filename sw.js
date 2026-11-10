const C='sebian-v2',A=['./','index.html','manifest.json','icon-192.png','icon-512.png','https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(m=>{const n=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque'))caches.open(C).then(c=>c.put(e.request,r.clone()));return r}).catch(()=>m);return m||n}))});
