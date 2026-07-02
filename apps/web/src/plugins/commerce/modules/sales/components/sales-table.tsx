import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import { useSales } from "../hooks/use-sales";
import { deleteSale } from "../services/sales-catalog-service";
import { mapSaleToForm } from "../utils/sales-mapper";

export default function SalesTable() {
  const sales = useSales();

  function handleEdit(
    sale: (typeof sales)[number],
  ) {
    loadForm(
      sale.id,
      mapSaleToForm(sale),
    );
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this sale?")) {
      return;
    }

    await deleteSale(id);
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th>Sale No</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {sales.map((sale) => (
          <tr key={sale.id}>
            <td>{sale.saleNo}</td>
            <td>{sale.customerId}</td>
            <td>{sale.saleDate}</td>
            <td>{sale.status}</td>

            <td className="space-x-2">
              <button
                type="button"
                onClick={() => handleEdit(sale)}
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(sale.id)}
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
