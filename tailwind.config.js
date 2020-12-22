const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    enable: false,
    content: ['./public/**/*.html', './src/**/*.vue'],
    options: {
      whitelistPatterns: [
        /-(leave|enter|appear)(|-(to|from|active))$/,
        /^(?!(|.*?:)cursor-move).+-move$/,
        /^router-link(|-exact)-active$/
      ]
    }
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {}
  },
  theme: {
    colors: {
      indigo: colors.indigo,
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
      white: colors.white,
      green: colors.green,
      blue: colors.blue,
      blueGray: colors.blueGray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
    }
  },
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')
  ]
}
