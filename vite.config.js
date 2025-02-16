import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/weather-app/',

  build: {
    outDir: 'dist',

    // Настройки для оптимизации
    rollupOptions: {
      output: {
        // Указываем путь для всех статичных файлов
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],  // Включаем обработку картинок

  // Для разработки с локальной папкой
  server: {
    open: true, // Открывать браузер автоматически при запуске dev-сервера
  }
})
