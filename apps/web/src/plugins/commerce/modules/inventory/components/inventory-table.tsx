import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import { useInventory } from "../hooks/use-inventory";
import { deleteInventory } from "../services/inventory-catalog-service";
import { mapInventoryToForm } from "../utils/inventory-mapper";

export default function InventoryTable() {
  const inventory = useInventory();

  function handleEdit(
    item: (typeof inventory)[number],
  ) {
    loadForm(
      item.id,
      mapInventoryToForm(item),
    );
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete inventory record?")) {
      return;
    }

    await deleteInventory(id);
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Available</th>
          <th>Reserved</th>
          <th>Reorder</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {inventory.map((item) => (
          <tr key={item.id}>
            <td>{item.productId}</td>
            <td>{item.quantity}</td>
            <td>{item.availableQuantity}</td>
            <td>{item.reservedQuantity}</td>
            <td>{item.reorderLevel}</td>

            <td className="space-x-2">
              <button
                type="button"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => handleDelete(item.id)}
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
