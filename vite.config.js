import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import { fileURLToPath } from "url"
import Sitemap from "vite-plugin-sitemap"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Sitemap({hostname: "https://luxyservice.com.br",
    dynamicRoutes: [
    '/servicos',
    '/sobre'
    ]
  })],
  server: {
    host: true,
    port: 5174,
    watch: {
      usePolling: true,
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})