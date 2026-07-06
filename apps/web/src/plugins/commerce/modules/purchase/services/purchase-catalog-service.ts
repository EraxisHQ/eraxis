import { purchaseService } from "./purchase-service";
import { refreshPurchases } from "./purchase-store";

export async function deletePurchase(
  id: string,
) {
  await purchaseService.delete(id);

  await refreshPurchases();
}
