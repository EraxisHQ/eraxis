import "../registry/register-invoice-submit-handler";

import { registerInvoiceForm } from "../registry/register-invoice-form";

import { registerRoute } from "../../../../../features/runtime/routes/route-registry";

import { INVOICE_ROUTE } from "../routes/invoice.routes";

export function bootstrapInvoice() {
  registerInvoiceForm();
  registerRoute(INVOICE_ROUTE);
}
