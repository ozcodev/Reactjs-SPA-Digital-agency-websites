import { defineConfig } from 'vite';
import sass from 'sass';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    {
      name: 'sass',
      transform: (code, id) => {
        if (id.endsWith('.scss') || id.endsWith('.sass')) {
          const result = sass.renderSync({ file: id });
          return { code: result.css.toString(), map: null };
        }
      },
    },
    react(),
  ],
});
