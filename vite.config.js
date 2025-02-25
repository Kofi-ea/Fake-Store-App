// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    historyApiFallback: true, // This ensures all routes fallback to index.html
  },
});
