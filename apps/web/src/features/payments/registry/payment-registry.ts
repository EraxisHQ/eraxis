import type {
  Payment,
} from "../types/payment";

export const
PAYMENT_REGISTRY:
  Payment[] = [
    {
      id: "payment-001",

      invoiceId:
        "invoice-001",

      amount: 100,

      method:
        "upi",

      status:
        "completed",

      paymentDate:
        "2026-01-01",
    },
  ];
