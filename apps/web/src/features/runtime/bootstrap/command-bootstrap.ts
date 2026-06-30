import {
  loadModules,
} from "../services/module-loader";

export function bootstrapCommands() {
  const modules = loadModules();

  for (const module of modules as Record<string, unknown>[]) {
    if ("commands" in module) {
      // Registration will be implemented
      // when modules expose commands.
    }
  }
}
