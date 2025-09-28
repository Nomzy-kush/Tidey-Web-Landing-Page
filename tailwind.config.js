/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan all React components
    "./index.html"                 // your actual HTML file
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      screens: {
        xs: "425px", // new breakpoint
      }
    },
  },
  plugins: [],
};



