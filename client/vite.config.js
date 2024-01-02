import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // ...other server config options
    mimeTypes: {
      "audio/mp3": ["mp3"],
    },
  },
});
