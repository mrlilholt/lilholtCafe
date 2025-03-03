import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    plugins: [react()],
    root: 'public', // serving files from public folder for dev/build
    build: {
        outDir: '../dist'
    }
});