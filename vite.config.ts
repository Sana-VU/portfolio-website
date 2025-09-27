import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { fileURLToPath } from "node:url";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  // Ensure correct asset and link paths when hosted at /portfolio-website/
  base: '/portfolio-website/',
  plugins: [mdx(), react()],
  resolve: {
    alias: {
      "@": srcDir,
    },
  },
});
