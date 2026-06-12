import {
  createContext,
} from "react";

import type {
  HealthCheck,
} from "../types/health-check";

export const HealthContext =
  createContext<HealthCheck[]>([]);
