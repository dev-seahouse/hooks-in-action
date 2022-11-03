/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors');

// :root {
//   --page-bg: #eee7be;
//   --primary: #173f5f;
//   --sedonary: #20639b;
//   --tertiary: #3caea3;
//   --error: #ed553b;
//   --dark-text: #444;
//   --light-text: #fff;
// }

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
      tertiary: 'var(--tertiary)',
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
