import {
  loadModules,
} from "../services/module-loader";

export function bootstrapJobs() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("jobs" in module) {
      // Job registration will be connected later.
    }
  }
}
