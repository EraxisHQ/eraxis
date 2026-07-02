import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import { useBrands } from "../hooks/use-brands";
import { deleteBrand } from "../services/brand-catalog-service";
import { mapBrandToForm } from "../utils/brand-mapper";

export default function BrandTable() {
  const brands = useBrands();

  function handleEdit(
    brand: (typeof brands)[number],
  ) {
    loadForm(
      brand.id,
      mapBrandToForm(brand),
    );
  }

  async function handleDelete(
    id: string,
  ) {
    const confirmed =
      window.confirm(
        "Delete this brand?",
      );

    if (!confirmed) {
      return;
    }

    await deleteBrand(id);
  }

  return (
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {brands.map((brand) => (
          <tr key={brand.id}>
            <td>{brand.code}</td>

            <td>{brand.name}</td>

            <td>
              {brand.active
                ? "Active"
                : "Inactive"}
            </td>

            <td className="space-x-2">
              <button
                type="button"
                onClick={() =>
                  handleEdit(brand)
                }
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() =>
                  handleDelete(brand.id)
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
