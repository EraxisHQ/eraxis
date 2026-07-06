import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  UNIT_FORM,
} from "../forms/unit-form";

export function registerUnitForm() {
  registerForm(
    UNIT_FORM,
  );
}
