/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: ["./__tests__/e2e/**", "./node_modules"],
    globals: true,
    coverage: {
      include: ["src"],
    },
    setupFiles: "./__tests__/testSetup.ts",
  },
});
