import { defineConfig } from "vite";

import appframe from "@olenbetong/appframe-vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react(), appframe()],
  appType: "custom",
  optimizeDeps: {
    esbuildOptions: { target: ["es2020"] },
  },
  build: { target: ["chrome90", "safari14"] },
}));
