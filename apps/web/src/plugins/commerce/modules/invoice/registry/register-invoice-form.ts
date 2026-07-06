import {
  registerForm,
} from "../../../../../features/form-runtime/registry/form-registry";

import {
  INVOICE_FORM,
} from "../forms/invoice-form";

export function registerInvoiceForm() {
  registerForm(INVOICE_FORM);
}
