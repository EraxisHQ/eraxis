import {
  ActivityContext,
} from "../context/activity-context";

import {
  DEFAULT_ACTIVITIES,
} from "../constants/default-activities";

type Props = {
  children: React.ReactNode;
};

export function ActivityProvider({
  children,
}: Props) {

  return (
    <ActivityContext.Provider
      value={DEFAULT_ACTIVITIES}
    >
      {children}
    </ActivityContext.Provider>
  );
}
