import { defineConfig } from "@lovable.dev/vite-tanstack-config";
export default defineConfig({
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/", prerender: { enabled: true, crawlLinks: false } }],
  },
});
