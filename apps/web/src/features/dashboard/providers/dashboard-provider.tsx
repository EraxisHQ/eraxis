import {
  DashboardContext,
} from "../context/dashboard-context";

import {
  loadDashboardWidgets,
} from "../services/dashboard-widget-loader-service";

type Props = {
  children: React.ReactNode;
};

export function DashboardProvider({
  children,
}: Props) {

  const widgets =
    loadDashboardWidgets();

  return (
    <DashboardContext.Provider
      value={widgets}
    >
      {children}
    </DashboardContext.Provider>
  );
}