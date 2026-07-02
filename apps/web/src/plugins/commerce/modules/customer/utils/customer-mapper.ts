import type { Customer } from "../types/customer";

export function mapCustomerToForm(
  customer: Customer,
): Record<string, unknown> {
  return {
    code: customer.code,
    name: customer.name,
    mobile: customer.mobile,
    email: customer.email,
    address: customer.address,
    gstNumber: customer.gstNumber,
    active: customer.active,
  };
}
