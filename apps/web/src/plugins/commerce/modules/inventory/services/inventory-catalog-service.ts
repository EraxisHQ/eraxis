import { inventoryService } from "./inventory-service";
import { refreshInventory } from "./inventory-store";

export async function deleteInventory(
  id: string,
) {
  await inventoryService.delete(id);

  await refreshInventory();
}
