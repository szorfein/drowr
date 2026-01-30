// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import config from "./src/config/config.json";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url,
  vite: {
    plugins: [tailwindcss()],
  },
});
