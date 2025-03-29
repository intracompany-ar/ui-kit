import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
        entry: 'src/index.ts',
        name: 'IntraCompanyUI',
        fileName: 'index',
        formats: ['es', 'cjs']
    },
    rollupOptions: {
        external: ['vue'],
        output: {
            globals: {
            vue: 'Vue'
            }
        }
    }
  }
})