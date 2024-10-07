import { defineConfig } from "tsup";

export default defineConfig({
  name: "strip-emoji",
  target: "node18",
  minify: true,
  dts: {
    resolve: true,
    entry: "./src/index.ts",
  },
});
