import {
  CUSTOMER_ADDRESS_REGISTRY,
} from "../registry/customer-address-registry";

export function
loadCustomerAddresses() {

  return CUSTOMER_ADDRESS_REGISTRY
    .filter(
      (address) =>
        address.active
    );
}
