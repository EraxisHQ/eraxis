/**
 * =====================================
 * Eraxis Commerce
 * Module: Payments
 *
 * Milestone:
 * M002-17-01
 * =====================================
 */

export type Payment = {
  id: string;

  invoiceId: string;

  amount: number;

  method:
    | "cash"
    | "card"
    | "upi"
    | "bank-transfer";

  status:
    | "pending"
    | "completed"
    | "failed";

  paymentDate: string;
};
