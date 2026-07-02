import { inventoryService } from "./inventory-service";

export async function increaseStock(
  productId: string,
  quantity: number,
) {
  const inventory =
    (await inventoryService.findAll()).find(
      (item) => item.productId === productId,
    );

  if (!inventory) {
    await inventoryService.create({
      id: crypto.randomUUID(),
      productId,
      quantity,
      reservedQuantity: 0,
      availableQuantity: quantity,
      reorderLevel: 0,
    });

    return;
  }

  await inventoryService.update(
    inventory.id,
    {
      ...inventory,
      quantity:
        inventory.quantity + quantity,
      availableQuantity:
        inventory.availableQuantity + quantity,
    },
  );
}