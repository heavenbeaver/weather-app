import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   https: true, // Включаем HTTPS
  //   host: true,  // Делаем сервер доступным в локальной сети
  // },
  plugins: [react()],
  base: '/https://github.com/heavenbeaver/weather-app/'
})
