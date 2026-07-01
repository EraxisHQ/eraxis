import { registerForm } from "../../../../../features/form-runtime/registry/form-registry";

import { CATEGORY_FORM } from "../forms/category-form";

export function registerCategoryForm() {
  registerForm(CATEGORY_FORM);
}   