import type {
  Discount,
} from "../types/discount";

export const
DISCOUNT_REGISTRY:
  Discount[] = [
    {
      id: "discount-001",

      code: "NEW10",

      name:
        "New Customer",

      percentage: 10,

      active: true,
    },
  ];
