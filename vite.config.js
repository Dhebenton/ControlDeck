import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    fs: {
      strict: true,
    },
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
});
