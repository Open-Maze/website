import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-moment'])],
    },
  },
});
