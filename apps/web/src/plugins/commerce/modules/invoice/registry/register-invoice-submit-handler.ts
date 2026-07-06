import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  invoiceService,
} from "../services/invoice-service";

import {
  refreshInvoices,
} from "../services/invoice-store";

registerSubmitHandler(
  "invoice",
  async (values) => {
    const editingId = getEditingId();

    const invoice = {
      id: editingId ?? crypto.randomUUID(),
      invoiceNo: String(values.invoiceNo),
      saleId: String(values.saleId),
      customerId: String(values.customerId),
      invoiceDate: String(values.invoiceDate),
      totalAmount: Number(values.totalAmount),
      taxAmount: Number(values.taxAmount ?? 0),
      discountAmount: Number(values.discountAmount ?? 0),
      netAmount: Number(values.netAmount),
      status:
        (values.status as
          | "Draft"
          | "Issued"
          | "Paid"
          | "Cancelled") ?? "Draft",
    };

    if (editingId) {
      await invoiceService.update(editingId, invoice);
    } else {
      await invoiceService.create(invoice);
    }

    await refreshInvoices();

    clearForm();
  },
);
