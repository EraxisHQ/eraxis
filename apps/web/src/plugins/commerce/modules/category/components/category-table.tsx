import { loadForm } from "../../../../../features/form-runtime/services/form-session-service";

import { useCategories } from "../hooks/use-categories";

import { mapCategoryToForm } from "../utils/category-mapper";

import { deleteCategory } from "../services/category-catalog-service";

export default function CategoryTable() {
  const categories = useCategories();

  function handleEdit(category: (typeof categories)[number]) {
    loadForm(
      category.id,
      mapCategoryToForm(category),
    );
  }

  async function handleDelete(
  id: string,
) {
  const confirmed =
    window.confirm(
      "Delete this category?",
    );

  if (!confirmed) {
    return;
  }

  await deleteCategory(id);
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
        {categories.map(category => (
          <tr key={category.id}>
            <td>{category.code}</td>

            <td>{category.name}</td>

            <td>
              {category.active
                ? "Active"
                : "Inactive"}
            </td>

            <td>
             <div className="space-x-2">
  <button
    type="button"
    onClick={() =>
      handleEdit(category)
    }
  >
    Edit
  </button>

  <button
    type="button"
    onClick={() =>
      handleDelete(category.id)
    }
  >
    Delete
  </button>
</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
