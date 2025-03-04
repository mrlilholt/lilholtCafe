// filepath: /Users/alilholt/lilholt-cafe-site/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  root: 'public',
  publicDir: 'public', // Ensure Vite copies the public directory
  build: {
    outDir: '../dist'
  }
});