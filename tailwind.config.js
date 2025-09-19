module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // scan your React files
    "./public/index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
