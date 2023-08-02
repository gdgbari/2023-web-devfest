/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  safelist: [
	  "md:text-end",
  ],
};
