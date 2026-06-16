/**
 * =====================================
 * Eraxis Commerce
 * Module: Order Items
 *
 * Milestone:
 * M002-15-01
 * =====================================
 */

export type OrderItem = {
  id: string;

  orderId: string;

  productId: string;

  variantId?: string;

  quantity: number;

  unitPrice: number;

  totalPrice: number;
};
