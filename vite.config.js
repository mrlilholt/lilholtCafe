import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: 'public', // serving files from public folder
    build: {
       outDir: '../dist'
    }
});