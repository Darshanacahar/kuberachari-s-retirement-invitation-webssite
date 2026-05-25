import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  base: "/kuberachari-s-retirement-invitation-webssite/",
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true
      }
    }),
    react(),
    tailwindcss(),
    tsconfigPaths()
  ],
  optimizeDeps: {
    exclude: [
      "@tanstack/start-server-core",
      "@tanstack/react-start",
      "@tanstack/start-client-core",
    ],
  },
  environments: {
    tanstack_start_app: {
      optimizeDeps: {
        exclude: [
          "@tanstack/start-server-core",
          "@tanstack/react-start",
          "@tanstack/start-client-core",
        ],
      },
    },
  },
});
