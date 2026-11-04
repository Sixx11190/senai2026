self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado com sucesso');
});

self.addEventListener('fetch', (e) => {
  // Deixa o app buscar os arquivos normalmente na rede
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});