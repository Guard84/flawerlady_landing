import { defineConfig } from 'vite'
import pugPlugin from 'vite-plugin-pug'
import path from 'path'

export default defineConfig({
  plugins: [
    pugPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})
