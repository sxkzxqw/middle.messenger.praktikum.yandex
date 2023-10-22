import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import path from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    handlebars(),
    copy({
      targets: [
        { src: './src/assets/**/*', dest: path.resolve(__dirname, 'dist/assets/') },
      ],
      hook: 'writeBundle'
    })
  ],
  assetsInclude: "**/*.hbs",
}) 