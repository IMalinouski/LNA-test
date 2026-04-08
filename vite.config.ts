import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/LNA-test/",
  plugins: [
    react(),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts", // Файл с логикой воркера
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // Включаем поддержку в режиме разработки
        type: "module",
      },
    }),
  ],
});
