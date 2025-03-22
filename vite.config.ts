import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Studio65/" // ✅ Correct base for GitHub Pages
})
