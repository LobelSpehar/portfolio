/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        pale: 'var(--pale)',
        blueish: 'var(--blueish)',
        accent: 'var(--accent)',
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
