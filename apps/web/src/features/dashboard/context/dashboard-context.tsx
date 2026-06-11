import {
  createContext,
} from "react";

import type {
  DashboardWidget,
} from "../types/dashboard-widget";

export const DashboardContext =
  createContext<DashboardWidget[]>([]);