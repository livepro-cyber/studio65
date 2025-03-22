import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: "/Studio65/", // Keep your correct GitHub Pages base
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias @ -> src
    },
  },
});
