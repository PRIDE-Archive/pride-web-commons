import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineConfig({
  base: './',
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        main: 'index.html',
        isolation: 'isolation.html'
      }
    }
  },
  plugins: [
    {
      name: 'copy-banner',
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'banner/index.txt',
          source: readFileSync(resolve(__dirname, 'banner/index.txt'), 'utf-8')
        })
      }
    }
  ]
})
