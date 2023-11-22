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
    "xl:grid-cols-1",
    "xl:grid-cols-2",
    "xl:grid-cols-3",
    "xl:grid-cols-4",
    "xl:grid-cols-5",
    "xl:grid-cols-6",
    "xl:grid-rows-13",
    "xl:col-span-1",
    "xl:col-span-2",
    "xl:col-span-3",
    "xl:col-span-4",
    "xl:col-span-5",
    "xl:col-span-6",
    "xl:row-span-2",
    "bg-[url(/assets/images/gallery/01.webp)]",
    "bg-[url(/assets/images/gallery/02.webp)]",
    "bg-[url(/assets/images/gallery/03.webp)]",
    "bg-[url(/assets/images/gallery/04.webp)]",
    "bg-[url(/assets/images/gallery/05.webp)]",
    "bg-[url(/assets/images/gallery/06.webp)]",
    "bg-[url(/assets/images/gallery/07.webp)]",
    "bg-[url(/assets/images/gallery/08.webp)]",
    "bg-[url(/assets/images/gallery/09.webp)]",
    "bg-[url(/assets/images/gallery/10.webp)]",
    "xl:grid-cols-[200px_repeat(5,_minmax(0,_1fr))]"
  ],
};
