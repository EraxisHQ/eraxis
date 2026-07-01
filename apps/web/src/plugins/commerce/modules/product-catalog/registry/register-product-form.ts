import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  PRODUCT_FORM,
} from "../forms/product-form";

export function
registerProductForm() {
  registerForm(
    PRODUCT_FORM,
  );
}
