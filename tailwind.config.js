/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2A2B2A',
        secondary: '#706C61',
        pale: '#F8F4E3',
        blueish: '#79A9D1',
        accent: '#F03A47',
      },
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(110vw)' },

          '100%': {
            transform: 'translateX(0vw)',
          },
        },
        fadeIn: {
          '0%': { transform: 'scale(0)' },

          '100%': {
            transform: 'scale(1)',
          },
        },
        rotateIn: {
          '0%': { transform: 'rotate(360deg)' },

          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
      animation: {
        moveLeft: 'moveLeft 1s ease-out',
        appear: 'fadeIn 0.75s ',
        rotate: 'rotateIn 0.75s',
      },
    },
  },
  plugins: [],
};
