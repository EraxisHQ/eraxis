import {
  INVENTORY_REGISTRY,
} from "../registry/inventory-registry";

export function getInventory(
  productId: string
) {
  return INVENTORY_REGISTRY.find(
    (item) =>
      item.productId ===
      productId
  );
}
