import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import { useSuppliers } from "../hooks/use-suppliers";
import { deleteSupplier } from "../services/supplier-catalog-service";
import { mapSupplierToForm } from "../utils/supplier-mapper";

export default function SupplierTable() {
  const suppliers = useSuppliers();

  function handleEdit(
    supplier: (typeof suppliers)[number],
  ) {
    loadForm(
      supplier.id,
      mapSupplierToForm(supplier),
    );
  }

  async function handleDelete(
    id: string,
  ) {
    const confirmed = window.confirm(
      "Delete this supplier?",
    );

    if (!confirmed) {
      return;
    }

    await deleteSupplier(id);
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {suppliers.map((supplier) => (
          <tr key={supplier.id}>
            <td>{supplier.code}</td>
            <td>{supplier.name}</td>
            <td>{supplier.mobile}</td>
            <td>
              {supplier.active
                ? "Active"
                : "Inactive"}
            </td>

            <td className="space-x-2">
              <button
                type="button"
                onClick={() =>
                  handleEdit(supplier)
                }
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() =>
                  handleDelete(supplier.id)
                }
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
