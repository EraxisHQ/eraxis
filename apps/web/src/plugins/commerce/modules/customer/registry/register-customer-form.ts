import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  CUSTOMER_FORM,
} from "../forms/customer-form";

export function registerCustomerForm() {
  registerForm(CUSTOMER_FORM);
}
