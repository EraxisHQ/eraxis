import { supplierService } from "./supplier-service";
import { refreshSuppliers } from "./supplier-store";

export async function deleteSupplier(
  id: string,
) {
  await supplierService.delete(id);

  await refreshSuppliers();
}
