// filepath: /Users/alilholt/lilholt-cafe-site/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    plugins: [react()],
    root: 'public',
    build: {
        outDir: '../dist'
    }
});