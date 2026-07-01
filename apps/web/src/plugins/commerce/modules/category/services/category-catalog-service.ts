import { categoryService } from "./category-service";
import { refreshCategories } from "./category-store";

export async function deleteCategory(
  id: string,
) {
  await categoryService.delete(id);

  await refreshCategories();
}
