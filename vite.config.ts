import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    chunkSplitPlugin() as Plugin,
    react(),
    eslint({
      fix: true, // https://www.npmjs.com/package/vite-plugin-eslint
    }),
  ],
  build: {
    cssCodeSplit: true, // false to produce 1 css file
  },
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  resolve: {
    alias: [
      {
        find: '@',
        // eslint-disable-next-line unicorn/prefer-module
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
});
