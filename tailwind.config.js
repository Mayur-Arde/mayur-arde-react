const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      Animation: {
        spin: 'spin 1s linear infinite',
      },
      colors: {
        Teal:colors.teal,
        cyan:colors.cyan,
        sky:colors.sky,
        violet: colors.violet,
        fuchsia: colors.fuchsia
      }
    },
  },
  variants: {
    extend: {
      animation : ['motion-safe'],
    },
  },
  plugins: [],
}
