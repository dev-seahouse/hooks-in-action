/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    colors: {
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
      button: 'var(--button-bg)',
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
