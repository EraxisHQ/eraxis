import {
  useContext,
} from "react";

import {
  DashboardContext,
} from "../context/dashboard-context";

export function useDashboardWidgets() {
  return useContext(
    DashboardContext
  );
}