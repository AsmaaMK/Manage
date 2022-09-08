import { defineConfig } from 'vite';

import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  build: {
    minify: 'esbuild',
    target: 'esnext',
  },
  plugins: [createHtmlPlugin({ minify: true })],
});
