import { registerForm } from "../../../../../features/form-runtime/registry/form-registry";
import { SUPPLIER_FORM } from "../forms/supplier-form";

export function registerSupplierForm() {
  registerForm(SUPPLIER_FORM);
}
