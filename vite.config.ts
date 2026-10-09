import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH is the folder the site is served from. Locally it's "/".
// The GitHub Pages workflow sets it to "/wild-oyster-works/" (the repository name).
// With a custom domain later, it goes back to "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  server: { port: 5173, open: false },
});
