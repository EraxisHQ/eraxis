import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  PRODUCT_FORM,
} from "../../../../../features/form-runtime/registry/product-form";

export function
registerProductForm() {
  registerForm(
    PRODUCT_FORM,
  );
}
