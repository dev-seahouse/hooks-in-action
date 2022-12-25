/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: twColors.black,
        white: twColors.white,
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        text: {
          dark: 'var(--dark-text)',
          light: 'var(--light-text)',
        },
        error: 'var(--error)',
      },
    },
  },
  plugins: [],
};
