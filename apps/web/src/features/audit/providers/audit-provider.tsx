import {
  AuditContext,
} from "../context/audit-context";

import {
  DEFAULT_AUDIT_LOGS,
} from "../constants/default-audit-logs";

type Props = {
  children: React.ReactNode;
};

export function AuditProvider({
  children,
}: Props) {
  return (
    <AuditContext.Provider
      value={DEFAULT_AUDIT_LOGS}
    >
      {children}
    </AuditContext.Provider>
  );
}