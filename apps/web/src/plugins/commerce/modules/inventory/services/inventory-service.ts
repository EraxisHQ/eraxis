import { inventoryRepository } from "./inventory-repository";
import type { Inventory } from "../types/inventory";

export const inventoryService = {
  findAll() {
    return inventoryRepository.findAll();
  },

  findById(id: string) {
    return inventoryRepository.findById(id);
  },

  create(item: Inventory) {
    return inventoryRepository.create(item);
  },

  update(id: string, item: Inventory) {
    return inventoryRepository.update(id, item);
  },

  delete(id: string) {
    return inventoryRepository.delete(id);
  },
};
