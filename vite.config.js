import { defineConfig } from "npm:vite";

// vite.config.js
export default defineConfig({
  server: {
    host: "localhost",
    cors: "*",
    hmr: {
      host: "localhost",
      protocol: "ws",
    },
  },
  build: {
    minify: true,
    manifest: true,
    rollupOptions: {
      input: "./src/index.js",
      output: {
        format: "umd",
        entryFileNames: "index.js",
        esModule: false,
        compact: true,
      },
    },
  },
  optimizeDeps: {
    include: ["gsap"],
  },
});
