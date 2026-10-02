import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "guftall-ir",
    entrypoint: "vinext/server/fetch-handler",
    domains: ["guftall.ir", "www.guftall.ir"],
    compatibilityDate: "2026-10-02",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    env: { ASSETS: bindings.assets() },
  }),
});
