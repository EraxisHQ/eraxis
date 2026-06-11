import type {
  AuditLog,
} from "../types/audit-log";

export const DEFAULT_AUDIT_LOGS:
  AuditLog[] = [
    {
      id: "1",
      action: "User Logged In",
      timestamp:
        "2026-01-01 10:00",
    },

    {
      id: "2",
      action: "Profile Updated",
      timestamp:
        "2026-01-01 10:05",
    },
  ];