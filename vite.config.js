import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output directory
    outDir: 'dist',
    // Set assetsPublicPath to './' if your app is served from the root
    assetsPublicPath: './',
  },
  server: {
    // Specify the directory where Vite should look for index.html
    // Change 'templates' to the folder name where your index.html resides
    fs: {
      strict: false,
      // Directory where index.html resides
      base: resolve(__dirname, 'templates'),
    },
  },
})
