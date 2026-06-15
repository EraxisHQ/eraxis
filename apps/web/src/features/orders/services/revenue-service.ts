import {
  ORDER_REGISTRY,
} from "../registry/order-registry";

export function getRevenue() {

  return ORDER_REGISTRY
    .reduce(
      (
        total,
        order
      ) =>
        total +
        order.totalAmount,
      0
    );
}
