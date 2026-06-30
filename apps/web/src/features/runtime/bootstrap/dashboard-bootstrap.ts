import {
  loadModules,
} from "../services/module-loader";

export function bootstrapDashboard() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("dashboard" in module) {
      // Registration later
    }
  }
}
