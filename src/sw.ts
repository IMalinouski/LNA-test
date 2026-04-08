/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;

// Перехват всех сетевых запросов (fetch и XMLHttpRequest)
self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  // Логируем URL запроса
  console.log(`[Service Worker] Intercepted request to: ${url}`);

  // Прерываем запрос, возвращая ошибку 403 или пустой ответ
  // Если нужно блокировать только определенные URL, добавьте if (url.includes(...))
  event.respondWith(
    new Response("Request blocked by Service Worker", {
      status: 403,
      statusText: "Forbidden",
    }),
  );
});

// Обязательно для работы плагина
export {};
