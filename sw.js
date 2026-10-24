// D3X WAY service worker
// Fixes vs old version: data files (products.json, version.json) are never piled up in the cache
// (the old code stored a new copy every minute), only good responses are cached, and one missing
// file no longer stops everything else from being cached.
const C='d3xway-v6';
const PRE=['./','index.html','admin.html','download.html','manifest.json','admin-manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.allSettled(PRE.map(u=>c.add(u)))))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin)return;
  const key=u.pathname.endsWith('.json')?u.origin+u.pathname:r; // ignore ?t=timestamp
  e.respondWith(fetch(r).then(res=>{
    if(res&&res.ok&&res.type==='basic'){const cp=res.clone();caches.open(C).then(c=>c.put(key,cp)).catch(()=>{})}
    return res;
  }).catch(()=>caches.match(key).then(m=>m||caches.match('index.html'))));
});
