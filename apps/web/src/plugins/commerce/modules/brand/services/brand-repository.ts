import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Brand } from "../types/brand";

export class BrandRepository extends BaseRepository<Brand> {
  constructor() {
    super("brands");
  }
}

export const brandRepository = new BrandRepository();
