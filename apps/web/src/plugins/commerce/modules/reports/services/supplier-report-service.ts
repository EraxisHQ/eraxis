import { supplierService } from "../../supplier/services/supplier-service";

import type { SupplierReport } from "../types/supplier-report";

export async function getSupplierReport(): Promise<SupplierReport> {
  const suppliers = await supplierService.findAll();

  return {
    totalSuppliers: suppliers.length,
  };
}
