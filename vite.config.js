import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import path from 'path';

export default defineConfig({
  plugins: [handlebars()],
  assetsInclude: "**/*.hbs",
}) 