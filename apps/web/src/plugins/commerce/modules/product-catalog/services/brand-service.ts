import type { Brand } from "../types/brand";
import { BrandRepository } from "./brand-repository";

const repository = new BrandRepository();

export const brandService = {
  findAll: () => repository.findAll(),

  findById: (id: string) =>
    repository.findById(id),

  create: (brand: Brand) =>
    repository.create(brand),

  update: (
    id: string,
    brand: Brand,
  ) =>
    repository.update(id, brand),

  delete: (id: string) =>
    repository.delete(id),
};