// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Plain",
        cssVariable: "--font-plain",
        variants: [
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/IosevkaEtoile-Medium.woff2"],
            display: "swap",
          },
        ],
      },
      {
        provider: "local",
        name: "Brand",
        cssVariable: "--font-brand",
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/IosevkaEtoile-Regular.woff2"],
            display: "swap",
          },
        ],
      },
    ],
  },
  vite: { plugins: [tailwindcss()] },
});
