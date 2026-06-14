import {
  pluginService,
} from "../services/plugin-service";

export function usePlugins() {

  return pluginService
    .getPlugins();
}