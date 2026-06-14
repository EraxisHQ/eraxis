import type {
  AuditLog,
} from "../types/audit-log";

class AuditRegistry {

  private items:
    AuditLog[] = [];

  register(
    item: AuditLog
  ) {
    this.items.push(
      item
    );
  }

  getAll() {
    return this.items;
  }
}

export const
  auditRegistry =
    new AuditRegistry();
