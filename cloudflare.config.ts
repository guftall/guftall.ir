import { defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "guftall-ir",
    domains: ["guftall.ir", "www.guftall.ir"],
    compatibilityDate: "2026-10-02",
    compatibilityFlags: ["nodejs_compat"],
  }),
});
