import { salesRepository } from "./sales-repository";
import type { Sale } from "../types/sale";

export const salesService = {
  findAll() {
    return salesRepository.findAll();
  },

  findById(id: string) {
    return salesRepository.findById(id);
  },

  create(sale: Sale) {
    return salesRepository.create(sale);
  },

  update(id: string, sale: Sale) {
    return salesRepository.update(id, sale);
  },

  delete(id: string) {
    return salesRepository.delete(id);
  },
};
