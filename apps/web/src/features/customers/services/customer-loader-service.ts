import {
  CUSTOMER_REGISTRY,
} from "../registry/customer-registry";

export function loadCustomers() {

  return CUSTOMER_REGISTRY
    .filter(
      (customer) =>
        customer.active
    );
}
