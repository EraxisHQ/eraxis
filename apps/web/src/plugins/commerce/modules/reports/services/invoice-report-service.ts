import { invoiceService } from "../../invoice/services/invoice-service";

import type { InvoiceReport } from "../types/invoice-report";

export async function getInvoiceReport(): Promise<InvoiceReport> {
  const invoices = await invoiceService.findAll();

  return {
    totalInvoices: invoices.length,

    draftInvoices: invoices.filter(
      (invoice) => invoice.status === "Draft",
    ).length,

    issuedInvoices: invoices.filter(
      (invoice) => invoice.status === "Issued",
    ).length,

    paidInvoices: invoices.filter(
      (invoice) => invoice.status === "Paid",
    ).length,

    cancelledInvoices: invoices.filter(
      (invoice) => invoice.status === "Cancelled",
    ).length,
  };
}
