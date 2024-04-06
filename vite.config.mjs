import { defineConfig } from "vite";
import { createMpaPlugin  } from 'vite-plugin-virtual-mpa';

export default defineConfig({
  plugins: [
    createMpaPlugin({
      htmlMinify: false,
      pages: [
        {
          name: "apple",
          template: "template/main.html"
        },
        {
          name: "banana",
          template: "template/main.html"
        }
      ],
      scanOptions: {
        scanDirs: [
          "pages/"
        ]
      }
    })
  ]
});