const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.html',
    ],
  },

  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      orange: colors.orange,
      blue: colors.blue,
      green: colors.green,
    },
    extend: {
      colors: {
        black: {
          light: '#3f4d53',
          DEFAULT: '#2f4047',
          dark: '#27373e',
          transparent: 'rgba(0, 0, 0, 0.75)',
        },
      },
    }
  },

  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],

    extend: {
      opacity: ['hover', 'group-hover', 'disabled'],
      visibility: ['hover', 'group-hover'],
      fontSize: ['hover'],
    }
  },
}
