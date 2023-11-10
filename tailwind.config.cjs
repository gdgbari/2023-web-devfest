const websiteConfig = require("./src/config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          padding: theme('spacing.4'),
          margin: 'auto',
        },
      });
    },
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  safelist: [
	  "md:text-end",
    "left-0",
    "left-[-16rem]",
    "bg-black/30",
    "bg-black/0",
    "lg:grid-cols-1",
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "lg:grid-cols-5",
    "lg:grid-cols-6",
    "lg:col-span-1",
    "lg:col-span-2",
    "lg:col-span-3",
    "lg:col-span-4",
    "lg:col-span-5",
    "lg:col-span-6",
    "bg-[url(/assets/images/gallery/01.webp)]",
    "bg-[url(/assets/images/gallery/02.webp)]",
    "bg-[url(/assets/images/gallery/03.webp)]",
    "bg-[url(/assets/images/gallery/04.webp)]",
    "bg-[url(/assets/images/gallery/05.webp)]",
    "bg-[url(/assets/images/gallery/06.webp)]",
    "bg-[url(/assets/images/gallery/07.webp)]",
    "bg-[url(/assets/images/gallery/08.webp)]",
    "bg-[url(/assets/images/gallery/09.webp)]",
    "bg-[url(/assets/images/gallery/10.webp)]"
  ],
};
