import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: path.resolve(__dirname, './ssl/key.pem'),
      cert: path.resolve(__dirname, './ssl/cert.pem')
    }
  }
});
