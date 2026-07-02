import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  INVENTORY_FORM,
} from "../forms/inventory-form";

export function registerInventoryForm() {
  registerForm(INVENTORY_FORM);
}
