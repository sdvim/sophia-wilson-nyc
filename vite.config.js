import netlify from "solid-start-netlify";
import solid from "solid-start/vite";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solid({
      adapter: netlify({ edge: true }),
      ssr: false,
      extensions: [".mdx", ".md"],
    }),
  ],
});
