/**
 * =====================================
 * Eraxis Commerce
 * Module: Invoices
 *
 * Milestone:
 * M002-16-01
 * =====================================
 */

export type Invoice = {
  id: string;

  invoiceNumber: string;

  customerId: string;

  orderId: string;

  status:
    | "draft"
    | "issued"
    | "paid"
    | "overdue"
    | "cancelled";

  amount: number;

  dueDate: string;
};
