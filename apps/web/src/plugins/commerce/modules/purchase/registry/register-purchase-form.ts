import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  PURCHASE_FORM,
} from "../forms/purchase-form";

export function registerPurchaseForm() {
  registerForm(PURCHASE_FORM);
}
