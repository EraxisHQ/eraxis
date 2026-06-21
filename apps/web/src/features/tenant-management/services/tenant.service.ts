import type { ManagedTenant } from "../types/managed-tenant";

const tenants: ManagedTenant[] = [
  {
    id: "1",
    code: "ERAXIS",
    name: "Eraxis Demo Tenant",
    active: true,
  },
];

export function getTenants() {
  return tenants;
}

export function createTenant(tenant: ManagedTenant) {
  tenants.push(tenant);
}

export function updateTenant(updatedTenant: ManagedTenant) {
  const index = tenants.findIndex((tenant) => tenant.id === updatedTenant.id);

  if (index >= 0) {
    tenants[index] = updatedTenant;
  }
}

export function deleteTenant(tenantId: string) {
  const index = tenants.findIndex((tenant) => tenant.id === tenantId);

  if (index >= 0) {
    tenants.splice(index, 1);
  }
}
