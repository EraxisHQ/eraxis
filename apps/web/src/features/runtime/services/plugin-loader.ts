import {
  getPlugins,
} from "../plugins/plugin-registry";

export function loadPlugins() {
  return getPlugins();
}
