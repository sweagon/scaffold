import terser from '@rollup/plugin-terser';
import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    terser(), // Minify code for production
    visualizer({ open: true, gzipSize: true, brotliSize: true }), // Visualize bundle size
  ],
  build: {
    target: 'esnext', // Ensure modern JS output
    sourcemap: false, // Disable source maps for production to reduce build size
    chunkSizeWarningLimit: 500, // Limit the chunk size warnings to avoid excessive splitting
    rollupOptions: {
      output: {
        // Split code to enhance performance
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    fs: {
      allow: ['.'], // Allow access to all files during development
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['react-router-dom'], // Exclude unnecessary deps for faster development builds
  },
});
