/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;

// @ts-expect-error: __WB_MANIFEST is injected by the build tool
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const manifest = self.__WB_MANIFEST;

// Перехват всех сетевых запросов (fetch и XMLHttpRequest)
self.addEventListener("fetch", (event) => {
  const url = event.request.url;

  // Логируем URL запроса
  console.log(`[Service Worker] Intercepted request to: ${url}`);

  if (!url.includes("posts")) return;
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
