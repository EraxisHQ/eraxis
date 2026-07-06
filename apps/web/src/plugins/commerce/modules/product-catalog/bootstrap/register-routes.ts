import {
  registerRoute,
} from "../../../../../features/runtime/routes/route-registry";

import {
  PRODUCT_CATALOG_ROUTE,
} from "../routes/product-catalog.routes";

export function registerProductCatalogRoutes() {
  registerRoute(PRODUCT_CATALOG_ROUTE);
}
