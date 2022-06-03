import viteCompression from 'vite-plugin-compression';
import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), viteCompression()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: process.env.PORT || 3333,
  },
  build: {
    minify: true,
    minifySyntax: true,
  }
});
