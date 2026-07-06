import { brandRepository } from "./brand-repository";
import type { Brand } from "../types/brand";

export const brandService = {
  findAll() {
    return brandRepository.findAll();
  },

  findById(id: string) {
    return brandRepository.findById(id);
  },

  create(brand: Brand) {
    return brandRepository.create(brand);
  },

  update(id: string, brand: Brand) {
    return brandRepository.update(id, brand);
  },

  delete(id: string) {
    return brandRepository.delete(id);
  },
};
