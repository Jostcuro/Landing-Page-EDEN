import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/./',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2020'
  },
  server: { port: 3000, open: true }
})