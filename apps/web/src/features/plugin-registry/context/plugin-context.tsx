import {
  createContext,
} from "react";

import type {
  Plugin,
} from "../types/plugin";

export const PluginContext =
  createContext<
    Plugin[]
  >([]);