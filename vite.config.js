import { defineConfig } from "vite";
import { readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const sites = readdirSync(resolve(__dirname, "sites")).filter((d) =>
  existsSync(resolve(__dirname, "sites", d, "index.html")),
);

export default defineConfig({
  server: { port: 8080 },
  build: {
    rollupOptions: {
      input: Object.fromEntries([
        ["index", resolve(__dirname, "index.html")],
        ...sites.map((d) => [d, resolve(__dirname, "sites", d, "index.html")]),
      ]),
    },
  },
});
