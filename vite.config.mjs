import appframe from "@olenbetong/appframe-vite";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(() => ({
	plugins: [react(), appframe()],
	appType: "custom",
	optimizeDeps: {
		esbuildOptions: { target: ["es2022"] },
	},
	build: { target: ["chrome105", "safari15"] },
}));
