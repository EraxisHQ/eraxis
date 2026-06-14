import type {
  HealthCheck,
} from "../types/health-check";

import {
  healthRegistry,
} from "../services/health-registry";

export const DEFAULT_HEALTH_CHECKS:
  HealthCheck[] = [
    {
      id: "1",
      service: "Application",
      status: "healthy",
    },

    {
      id: "2",
      service: "Database",
      status: "healthy",
    },
  ];

  DEFAULT_HEALTH_CHECKS.forEach(
  (item) => {
    healthRegistry
      .register(item);
  }
);
