import path from "path"; // Import path for aliases
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/mana-dark-mode/",
  plugins: [
    react(),
    tailwindcss(), // Activate Tailwind v4
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Maps @ to the src directory
    },
  },
});
