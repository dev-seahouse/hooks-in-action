/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      'button-primary': 'var(--button-primary)',
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
