import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion']
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  },
  // Add prerender configuration for better SEO
  prerender: {
    routes: [
      '/',
      '/about',
      '/contact',
      '/company/jasha',
      '/company/knitwire',
      '/company/biodynamic-fuel'
    ]
  }
})
