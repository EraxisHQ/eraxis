/**
 * =====================================
 * Eraxis Commerce
 * Module: Orders
 *
 * Milestone:
 * M002-06-01
 * =====================================
 */

export type Order = {
  id: string;

  orderNumber: string;

  customerId: string;

  status:
  | "draft"
  | "confirmed"
  | "processing"
  | "shipped"
  | "completed"
  | "cancelled";

  totalAmount: number;

  itemIds?: string[];
};
