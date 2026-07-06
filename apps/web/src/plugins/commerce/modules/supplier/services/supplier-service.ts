import { supplierRepository } from "./supplier-repository";
import type { Supplier } from "../types/supplier";

export const supplierService = {
  findAll() {
    return supplierRepository.findAll();
  },

  findById(id: string) {
    return supplierRepository.findById(id);
  },

  create(supplier: Supplier) {
    return supplierRepository.create(supplier);
  },

  update(id: string, supplier: Supplier) {
    return supplierRepository.update(id, supplier);
  },

  delete(id: string) {
    return supplierRepository.delete(id);
  },
};
