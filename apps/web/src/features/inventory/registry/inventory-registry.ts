import type {
  InventoryItem,
} from "../types/inventory-item";

export const INVENTORY_REGISTRY:
  InventoryItem[] = [
    {
      id: "inventory-001",

      productId: "product-001",

      quantity: 100,

      reservedQuantity: 0,

      availableQuantity: 100,
    },
  ];
