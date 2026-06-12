import type {
  HealthCheck,
} from "../types/health-check";

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
