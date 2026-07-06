import { salesService } from "./sales-service";
import { refreshSales } from "./sales-store";

export async function deleteSale(
  id: string,
) {
  await salesService.delete(id);

  await refreshSales();
}
