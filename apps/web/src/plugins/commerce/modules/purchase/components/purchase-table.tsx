import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import { usePurchases } from "../hooks/use-purchases";
import { deletePurchase } from "../services/purchase-catalog-service";
import { mapPurchaseToForm } from "../utils/purchase-mapper";

export default function PurchaseTable() {
  const purchases = usePurchases();

  function handleEdit(
    purchase: (typeof purchases)[number],
  ) {
    loadForm(
      purchase.id,
      mapPurchaseToForm(purchase),
    );
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this purchase?")) {
      return;
    }

    await deletePurchase(id);
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th>Purchase No</th>
          <th>Supplier</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {purchases.map((purchase) => (
          <tr key={purchase.id}>
            <td>{purchase.purchaseNo}</td>
            <td>{purchase.supplierId}</td>
            <td>{purchase.purchaseDate}</td>
            <td>{purchase.status}</td>

            <td className="space-x-2">
              <button
                type="button"
                onClick={() => handleEdit(purchase)}
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(purchase.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
