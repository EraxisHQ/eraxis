import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Inventory } from "../types/inventory";

export class InventoryRepository extends BaseRepository<Inventory> {
  constructor() {
    super("inventory");
  }
}

export const inventoryRepository = new InventoryRepository();
