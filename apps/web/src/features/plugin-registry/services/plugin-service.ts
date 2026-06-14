import {
  pluginRegistry,
} from "./plugin-registry";

export class PluginService {

  getPlugins() {
    return pluginRegistry
      .getAll();
  }
}

export const
  pluginService =
    new PluginService();
