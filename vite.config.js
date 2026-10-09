import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'PrideWebCommons',
      formats: ['es', 'umd'],
      fileName: (format) => `pride-web-commons.${format === 'es' ? 'js' : 'umd.cjs'}`
    },
    rollupOptions: {
      output: {
        exports: 'named',
        inlineDynamicImports: true
      }
    }
  }
})
