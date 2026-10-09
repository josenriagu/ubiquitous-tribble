import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // one clock for the prerendered markup and the bundle that picks it up
    __BUILD_TIME__: Number(process.env.BUILD_TIME) || Date.now(),
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  build: {
    // same folder the previous toolchain produced, so the host's publish directory still applies
    outDir: 'build',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
