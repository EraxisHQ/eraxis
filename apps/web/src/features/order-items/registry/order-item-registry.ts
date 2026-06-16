import type {
  OrderItem,
} from "../types/order-item";

export const
ORDER_ITEM_REGISTRY:
  OrderItem[] = [
    {
      id: "item-001",

      orderId:
        "order-001",

      productId:
        "product-001",

      quantity: 2,

      unitPrice: 50,

      totalPrice: 100,
    },
  ];
