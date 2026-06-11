import {
  createContext,
} from "react";

import type {
  AuditLog,
} from "../types/audit-log";

export const AuditContext =
  createContext<AuditLog[]>([]);