import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Standard ESM import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This is mandatory for Tailwind v4
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
  base: '/Team_Nika_EYarti/'
})