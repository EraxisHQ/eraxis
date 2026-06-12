import {
  HealthContext,
} from "../context/health-context";

import {
  DEFAULT_HEALTH_CHECKS,
} from "../constants/default-health-checks";

type Props = {
  children: React.ReactNode;
};

export function HealthProvider({
  children,
}: Props) {

  return (
    <HealthContext.Provider
      value={DEFAULT_HEALTH_CHECKS}
    >
      {children}
    </HealthContext.Provider>
  );
}
