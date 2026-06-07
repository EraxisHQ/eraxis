import { BaseEntity } from "../base/base-entity";

export interface TenantEntity extends BaseEntity {
  tenantId: string;
}