import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      fix: true, // https://www.npmjs.com/package/vite-plugin-eslint
    }),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
});
