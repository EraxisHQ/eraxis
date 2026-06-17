import type {
  Invoice,
} from "../types/invoice";

export const
INVOICE_REGISTRY:
  Invoice[] = [
    {
      id: "invoice-001",

      invoiceNumber:
        "INV-001",

      customerId:
        "customer-001",

      orderId:
        "order-001",

      status:
        "issued",

      amount: 100,

      dueDate:
        "2026-12-31",
    },
  ];
