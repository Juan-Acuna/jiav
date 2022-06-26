const colors = require('tailwindcss/colors')
module.exports = {
    content: ["./src/**/*.{js,css}","./dist/*.{html,js}"],
    theme: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        white: colors.white,
        black: colors.black,
        slate: colors.slate,
        red: colors.red,
        'pri': {
           50: '#e1f2ff',
          100: '#b8dcff',
          200: '#86c7ff',
          300: '#48b1ff',
          400: '#009fff',
          500: '#008dff',
          600: '#007eff',
          700: '#006aff',
          800: '#1a57ec',
          900: '#2b31cc',
        },
        'sec': {
           50: '#f7e1f1',
          100: '#ecb5dc',
          200: '#e384c3',
          300: '#dd4eab',
          400: '#db0b96',
          500: '#db007f',
          600: '#ca007a',
          700: '#b30073',
          800: '#9d006d',
          900: '#750062',
        },
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        rob: ['Roboto', 'sans-serif'],
      },
    },
    plugins: [],
  }