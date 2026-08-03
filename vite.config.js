import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // The same static build is served from /www1/ on the server and /JAC/ on
  // GitHub Pages. Relative asset URLs work in both locations.
  base: './',
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
  plugins: [react()]
});
