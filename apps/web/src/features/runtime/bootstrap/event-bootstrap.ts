import { loadModules } from "../services/module-loader";

export function bootstrapEvents() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("events" in module) {
      // Event registration will be connected
      // when modules expose events.
    }
  }
}
