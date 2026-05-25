import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [tanstackStart(), react(), tailwindcss(), tsconfigPaths(), cloudflare()],
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
