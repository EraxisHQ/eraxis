import type { Invoice } from "../types/invoice";

export function mapInvoiceToForm(
  invoice: Invoice,
): Record<string, unknown> {
  return {
    invoiceNo: invoice.invoiceNo,
    saleId: invoice.saleId,
    customerId: invoice.customerId,
    invoiceDate: invoice.invoiceDate,
    totalAmount: invoice.totalAmount,
    taxAmount: invoice.taxAmount,
    discountAmount: invoice.discountAmount,
    netAmount: invoice.netAmount,
    status: invoice.status,
  };
}
