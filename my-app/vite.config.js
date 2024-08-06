import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-todo-app/', // Replace 'react-todo-app' with your repository name
  plugins: [react()],
});
