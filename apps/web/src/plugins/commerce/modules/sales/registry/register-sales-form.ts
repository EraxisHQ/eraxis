import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  SALES_FORM,
} from "../forms/sales-form";

export function registerSalesForm() {
  registerForm(SALES_FORM);
}
