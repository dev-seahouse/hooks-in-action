/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: twColors.black,
      white: twColors.white,
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      'primary-lighter': 'var(--primary-lighter)',
      text: {
        dark: 'var(--dark-text)',
        light: 'var(--light-text)',
      },
      error: 'var(--error)',
    },
    extend: {},
  },
  plugins: [],
};
