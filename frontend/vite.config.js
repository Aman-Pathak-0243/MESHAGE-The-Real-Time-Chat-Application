import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://meshage-the-real-time-chat-application.onrender.com/",
        secure: false,
      },
    },
  },
  build: {
    outDir: "dist", // Ensure this matches the desired output directory
  },
});
