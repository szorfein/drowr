// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import config from "./src/config/config.json";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url,

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
  integrations: [sitemap(), pagefind()],
});
