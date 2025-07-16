import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@entities": path.resolve(__dirname, "./src/entities/"),
      "@app": path.resolve(__dirname, "./src/app/"),
      "@features": path.resolve(__dirname, "./src/features/"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@widgets": path.resolve(__dirname, "./src/widgets/"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  css: {
    postcss: "./postcss.config.cjs",
  },
});
