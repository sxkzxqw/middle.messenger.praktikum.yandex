import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import path from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    handlebars(),
  ],
  assetsInclude: "**/*.hbs",
})