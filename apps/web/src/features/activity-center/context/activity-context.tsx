import {
  createContext,
} from "react";

import type {
  Activity,
} from "../types/activity";

export const ActivityContext =
  createContext<Activity[]>([]);
