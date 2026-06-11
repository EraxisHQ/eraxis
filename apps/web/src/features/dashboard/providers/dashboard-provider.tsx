import {
  DashboardContext,
} from "../context/dashboard-context";

import {
  DEFAULT_WIDGETS,
} from "../constants/default-widgets";

type Props = {
  children: React.ReactNode;
};

export function DashboardProvider({
  children,
}: Props) {
  return (
    <DashboardContext.Provider
      value={DEFAULT_WIDGETS}
    >
      {children}
    </DashboardContext.Provider>
  );
}