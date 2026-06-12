import {
  createContext,
} from "react";

import type {
  RealtimeEvent,
} from "../types/realtime-event";

export const RealtimeContext =
  createContext<RealtimeEvent[]>([]);
