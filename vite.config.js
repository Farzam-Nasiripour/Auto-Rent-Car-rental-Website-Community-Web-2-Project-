import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Auto-Rent-Car-rental-Website-Community-Web-2-Project-/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about-us.html"),
        blog: resolve(__dirname, "blog.html"),
        article: resolve(__dirname, "article.html"),
        pdp: resolve(__dirname, "pdp.html"),
        pdp_2: resolve(__dirname, "pdp-2.html"),
        pdp_3: resolve(__dirname, "pdp-3.html"),
      },
    },
  },
});