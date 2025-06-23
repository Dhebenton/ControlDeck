import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Required for root-relative paths on Vercel
  build: {
    outDir: 'dist', // Vercel auto-detects this
  },
  server: {
    fs: {
      strict: true
    }
  }
});