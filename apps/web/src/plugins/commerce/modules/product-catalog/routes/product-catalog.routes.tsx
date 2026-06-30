import type { RuntimeRoute } from "../../../../../features/runtime/types/runtime-route";
import { ProductListPage } from "../pages/product-list.page";

export const PRODUCT_CATALOG_ROUTE: RuntimeRoute = {
  path: "/commerce/products",
  element: <ProductListPage />,
};
