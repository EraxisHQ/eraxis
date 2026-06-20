import { registerForm } from "./form-registry";

import { PRODUCT_FORM } from "./product-form";

export function registerCommerceForms() {
  registerForm(PRODUCT_FORM);
}
