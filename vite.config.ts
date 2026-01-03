
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Đảm bảo process.env.API_KEY hoạt động chính xác khi build
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY)
    }
  }
});
