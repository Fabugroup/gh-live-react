import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gh-live-react/", // for gitihub repository only


  server: {
    port: 3000,
    strictPort: true,
    host: "localhost",  // host: "0.0.0.0"
    open: true,
    cors: true,
  }
})
