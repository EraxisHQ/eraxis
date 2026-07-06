import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Purchase } from "../types/purchase";

export class PurchaseRepository extends BaseRepository<Purchase> {
  constructor() {
    super("purchases");
  }
}

export const purchaseRepository = new PurchaseRepository();
