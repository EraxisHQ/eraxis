import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Supplier } from "../types/supplier";

export class SupplierRepository extends BaseRepository<Supplier> {
  constructor() {
    super("suppliers");
  }
}

export const supplierRepository = new SupplierRepository();
