/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md,html}",
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
      colors: {
        darkish: {
          50: '#8d697a',
          100: '#544e68',
          200: '#203c56',
          300: '#0d2b45'
        },
        lightish: {
          50: '#ffecd6',
          100: '#ffd4a3',
          200: '#ffaa5e',
          300: '#d08159'
        },
        main: {
          background: "#fffffe",
          hadline: "#33272a",
          subheadline: "#594a4e",
          cardbackground: "#faeee7",
          cardheading: "#33272a",
          cardparagraph: "#594a4e",
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
};
