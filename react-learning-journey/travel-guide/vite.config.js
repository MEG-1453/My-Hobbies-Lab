import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/My-Hobbies-Lab/react-learning-journey/travel-guide/', // Bu satırı ekledim
})
