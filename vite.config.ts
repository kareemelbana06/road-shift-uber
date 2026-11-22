import { defineConfig } from "@lovable.dev/vite-tanstack-config";
export default defineConfig({
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: { entry: "server" },
    pages: [{ path: "/", prerender: { enabled: true, crawlLinks: false } }],
  },
});
