import { purchaseRepository } from "./purchase-repository";
import type { Purchase } from "../types/purchase";

export const purchaseService = {
  findAll() {
    return purchaseRepository.findAll();
  },

  findById(id: string) {
    return purchaseRepository.findById(id);
  },

  create(purchase: Purchase) {
    return purchaseRepository.create(purchase);
  },

  update(id: string, purchase: Purchase) {
    return purchaseRepository.update(id, purchase);
  },

  delete(id: string) {
    return purchaseRepository.delete(id);
  },
};
