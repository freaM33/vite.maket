import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/vite.maket/',
  css: {
    preprocessorOptions: {
      scss: {
      
      }
    },
    postcss: 'postcss.config.cjs'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})