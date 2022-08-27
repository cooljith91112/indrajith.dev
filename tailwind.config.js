/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
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
