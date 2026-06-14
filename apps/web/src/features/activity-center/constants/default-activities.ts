import type {
  Activity,
} from "../types/activity";

import {
  activityRegistry,
} from "../services/activity-registry";

export const DEFAULT_ACTIVITIES:
  Activity[] = [
    {
      id: "1",
      message:
        "User logged in",
      timestamp:
        "2026-01-01 10:00",
    },

    {
      id: "2",
      message:
        "Profile updated",
      timestamp:
        "2026-01-01 10:05",
    },
  ];

  DEFAULT_ACTIVITIES.forEach(
  (item) => {
    activityRegistry
      .register(item);
  }
);