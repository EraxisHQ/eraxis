import {
  createContext,
} from "react";

import type {
  Application,
} from "../types/application";

export const ApplicationContext =
  createContext<
    Application[]
  >([]);