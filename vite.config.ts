import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: "./", // Keep your correct GitHub Pages base
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias @ -> src
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api/, '/macros/s/AKfycbzALZ2pLsMgpEbWhq3hxk3fNZu2w6EJJc7eE7-Wi_fv6NO8yviBn7_ZZnmXNdtOlcdu/exec'),
      },
    },
  },
});
