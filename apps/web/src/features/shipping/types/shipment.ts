/**
 * =====================================
 * Eraxis Commerce
 * Module: Shipping
 *
 * Milestone:
 * M002-20-01
 * =====================================
 */

export type Shipment = {
  id: string;

  invoiceId: string;

  trackingNumber: string;

  carrier: string;

  status:
    | "pending"
    | "packed"
    | "shipped"
    | "delivered";

  shippedDate?: string;

  deliveredDate?: string;
};
