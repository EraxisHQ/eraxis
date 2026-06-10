import {
  useContext,
} from "react";

import {
  PluginContext,
} from "../context/plugin-context";

export function usePlugins() {
  return useContext(
    PluginContext
  );
}