module.exports = {
  purge: {
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
    extend: {
      colors: {
        'regal-blue': '#22223B',
      }
    }
  },
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')
  ]
}
