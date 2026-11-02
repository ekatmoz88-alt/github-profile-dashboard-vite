import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel serves the app from the domain root; GitHub Pages uses the repository subpath.
const base = process.env.VERCEL ? '/' : '/github-profile-dashboard-vite/'

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
