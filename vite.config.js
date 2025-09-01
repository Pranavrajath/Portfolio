import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss  from '@tailwindcss/vite'
import path from "path"
import { IconName } from '@phosphor-icons/react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: './Portfolio/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"./src"),
    },
  },
});
