import { AuditFields } from "./audit-fields";

export interface BaseEntity extends AuditFields {
  id: string;
}