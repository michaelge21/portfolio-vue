import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: "assets/js/index-45ce05b1.js",

  //       assetFileNames: ({ name }) => {
  //         if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
  //           return "assets/[name]-[hash][extname]";
  //         }

  //         if (/\.css$/.test(name ?? "")) {
  //           return "assets/css/[name]-[hash][extname]";
  //         }

  //         // default value
  //         // ref: https://rollupjs.org/guide/en/#outputassetfilenames
  //         return "assets/[name]-[hash][extname]";
  //       },
  //     },
  //   },
  // },
});
