import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
  build: {
    minify: true,
  },
  server: {
    cors: true
  },
  plugins: [sveltekit()],
});