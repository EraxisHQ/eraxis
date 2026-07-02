import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Sale } from "../types/sale";

export class SalesRepository extends BaseRepository<Sale> {
  constructor() {
    super("sales");
  }
}

export const salesRepository = new SalesRepository();
