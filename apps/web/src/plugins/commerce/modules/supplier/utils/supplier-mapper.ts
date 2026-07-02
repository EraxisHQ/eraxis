import type { Supplier } from "../types/supplier";

export function mapSupplierToForm(
  supplier: Supplier,
): Record<string, unknown> {
  return {
    code: supplier.code,
    name: supplier.name,
    mobile: supplier.mobile,
    email: supplier.email,
    address: supplier.address,
    gstNumber: supplier.gstNumber,
    active: supplier.active,
  };
}
