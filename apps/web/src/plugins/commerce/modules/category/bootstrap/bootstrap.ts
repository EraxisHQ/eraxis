import { registerRoute } from "../../../../../features/runtime/routes/route-registry";
import { CATEGORY_ROUTE } from "../routes/category.routes";
import { registerCategoryForm } from "../registry/register-category-form";
export function bootstrapCategory() {
  registerRoute(CATEGORY_ROUTE);
  registerCategoryForm();
}
