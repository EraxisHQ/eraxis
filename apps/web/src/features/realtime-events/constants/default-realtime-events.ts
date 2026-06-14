import type {
  RealtimeEvent,
} from "../types/realtime-event";

import {
  realtimeRegistry,
} from "../services/realtime-registry";

export const DEFAULT_REALTIME_EVENTS:
  RealtimeEvent[] = [
    {
      id: "1",
      event: "System Started",
      timestamp: "2026-01-01 09:00",
    },
  ];

  DEFAULT_REALTIME_EVENTS.forEach(
  (item) => {
    realtimeRegistry
      .register(item);
  }
);