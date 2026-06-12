import {
  useContext,
} from "react";

import {
  RealtimeContext,
} from "../context/realtime-context";

export function useRealtime() {

  return useContext(
    RealtimeContext
  );
}