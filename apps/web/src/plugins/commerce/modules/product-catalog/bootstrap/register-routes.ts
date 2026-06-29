import {
  registerRoute,
} from "../../../../../features/runtime/routes/route-registry";

import {
  productCatalogRoutes,
} from "../routes/product-catalog.routes";

export function
registerProductCatalogRoutes() {
  productCatalogRoutes.forEach(
    route => registerRoute(route),
  );
}
