// @ts-ignore
const colors = require('windicss/colors')

module.exports = {
  darkMode: 'class',
  plugins: [
    // @ts-ignore
    require('windicss/plugin/typography'),
    // @ts-ignore
    require('windicss/plugin/aspect-ratio')
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal
      }
    }
  }
}