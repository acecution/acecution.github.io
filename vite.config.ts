import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: true,
    rollupOptions: {
      input: {
        main: "index.html",
        comic: "comic.html",
      },
    },
  },
  server: {
    cors: true
  }
});
