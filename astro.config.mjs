import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AstroPWA from "@vite-pwa/astro";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://devfestbari.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    robotsTxt(),
    react(),
    AstroPWA({
      workbox: { navigateFallback: "/404" },
    }),
  ],
});
