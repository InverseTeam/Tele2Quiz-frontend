const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        32: '32px',
      },
      padding: {
        22: '88px',
      },
      width: {
        96: '96',
        111: '444px',
      },
      height: {
        15: '60px',
      },
      colors: {
        mainBlue: '#51B2E9',
        red: '#ED7043',
        black: '#191919',
        darkGray: '#888A8C',
        lightGray: '#F8F9FB',
        blueGray: '#E3ECF6',
        warnRed: '#D97C7C',
        pink: '#EC65A1',
        purple: '#BE85F8',
      },
      transitionTimingFunction: {
        DEFULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFULT: '400ms',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: 'fadeIn .5s ease-in-out',
      },
      zIndex: {
        1: '1',
        2: '2',
      },
    },
  },
  plugins: [],
};
