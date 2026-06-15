/**
 * =====================================
 * Eraxis
 * Module: Application Registry
 *
 * Purpose:
 * Central application registry.
 *
 * Milestone:
 * M001-02-02
 * =====================================
 */

import type {
  Application,
} from "../types/application";

export const APPLICATION_REGISTRY:
  Application[] = [
    {
      id: "core",

      code: "CORE",

      name: "Core Platform",

      route: "/dashboard",

      enabled: true,
    },
  ];
