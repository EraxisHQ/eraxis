import type {
  Order,
} from "../types/order";

export const ORDER_REGISTRY:
  Order[] = [
    {
      id: "order-001",

      orderNumber: "ORD-0001",

      customerId: "customer-001",

      status: "draft",

      totalAmount: 100,
    },
  ];
