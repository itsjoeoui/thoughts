/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blog: {
          100: "#cdb4db",
          200: "#ffc8dd",
          300: "#ffafcc",
          400: "#bde0fe",
          500: "#a2d2ff",
        },
      },
    },
  },
  plugins: [],
};
