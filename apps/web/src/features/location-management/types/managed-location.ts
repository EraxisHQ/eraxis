export interface ManagedLocation {
  id: string;
  tenantId: string;

  brandId: string;

  code: string;
  name: string;

  address: string;
  phone: string;
  email: string;

  manager: string;

  active: boolean;
}
