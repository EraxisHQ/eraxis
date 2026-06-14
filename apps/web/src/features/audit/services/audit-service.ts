import {
  auditRegistry,
} from "./audit-registry";

export class AuditService {

  getLogs() {

    return auditRegistry
      .getAll();
  }

  getLogCount() {

    return auditRegistry
      .getAll()
      .length;
  }
}

export const
  auditService =
    new AuditService();
