import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

import path from "path";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/pwa-ceb/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt"],
      manifest: {
        name: "CEB",
        short_name: "CEB",
        description: "Your PWA App",
        theme_color: "#316DCC",
        background_color: "#ffffff",
        display: "standalone",
        display_override: ["fullscreen","standalone","window-controls-overlay"],
        scope: "https://kode-frontend.github.io/pwa-ceb/",
        start_url: "https://kode-frontend.github.io/pwa-ceb/",
      },
    }),
  ],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@entities": path.resolve(__dirname, "./src/entities/"),
      "@app": path.resolve(__dirname, "./src/app/"),
      "@features": path.resolve(__dirname, "./src/features/"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@widgets": path.resolve(__dirname, "./src/widgets/"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@config": path.resolve(__dirname, "./src/config"),
    },
  },
  css: {
    postcss: "./postcss.config.cjs",
  },
});
