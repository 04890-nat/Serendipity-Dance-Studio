import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    base: '/Serendipity-Dance-Studio/', // Match GitHub repository name for reliable asset loading
    build: {
        outDir: 'docs',
        emptyOutDir: true,
    },
})
