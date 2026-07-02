import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  BRAND_FORM,
} from "../forms/brand-form";

export function registerBrandForm() {
  registerForm(
    BRAND_FORM,
  );
}
