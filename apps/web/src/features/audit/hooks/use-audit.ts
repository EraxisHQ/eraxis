import {
  useContext,
} from "react";

import {
  AuditContext,
} from "../context/audit-context";

export function useAudit() {
  return useContext(
    AuditContext
  );
}