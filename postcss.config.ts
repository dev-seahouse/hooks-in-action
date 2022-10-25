const postCssConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(import.meta.env.PROD ? { cssnano: {} } : {}),
  },
};

export default postCssConfig;
