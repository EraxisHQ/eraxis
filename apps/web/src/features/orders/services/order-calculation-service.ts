/**
 * =====================================
 * Eraxis Commerce
 * Module: Orders
 *
 * Purpose:
 * Calculates order totals.
 *
 * Milestone:
 * M002-08-01
 * =====================================
 */

import type {
  OrderItem,
} from "../types/order-item";

export function calculateOrderTotal(
  items: OrderItem[]
) {

  return items.reduce(
    (total, item) =>
      total +
      item.quantity *
      item.unitPrice,
    0
  );
}
