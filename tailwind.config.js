/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md}",
    "./src/**/*.svg",
    "./src/_includes/assets/css/*.css",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        "supply-regular": ["supplyRegular", "sans-serif"],
        "supply-light": ["supplyLight", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
