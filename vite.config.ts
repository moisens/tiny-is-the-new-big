import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 8080,
    proxy: {
      "/api": {
        target: "https://tinyhousing-backend-ezprh.ondigitalocean.app",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
  },
  plugins: [react()],
});
