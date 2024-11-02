/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'pale-pink': '#F2C4C8',
        'light-rose': '#D98B99',
        'soft-red': '#D98F8F',
        'dusty-rose': '#D9B8B8',
        'light-gray': '#F2F2F2',
      },
    },
  },
  plugins: [],
};
