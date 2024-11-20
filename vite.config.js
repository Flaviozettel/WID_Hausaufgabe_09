import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Optional: Alias für den src-Ordner
    },
  },
  server: {
    fs: {
      allow: ["."], // Erlaubt Zugriff auf das Wurzelverzeichnis
    },
  },
});
