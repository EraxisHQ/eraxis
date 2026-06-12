import {
  RealtimeContext,
} from "../context/realtime-context";

import {
  DEFAULT_REALTIME_EVENTS,
} from "../constants/default-realtime-events";

type Props = {
  children: React.ReactNode;
};

export function RealtimeProvider({
  children,
}: Props) {

  return (
    <RealtimeContext.Provider
      value={DEFAULT_REALTIME_EVENTS}
    >
      {children}
    </RealtimeContext.Provider>
  );
}
