import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    proxy: {
      '/save-customer': {
        target: 'https://phplaravel-1494371-5751203.cloudwaysapps.com',
        changeOrigin: true,
      },
    },
  },
  plugins: [tailwindcss()],
});
