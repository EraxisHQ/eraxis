import "../../../../../features/form-runtime/registry/register-submit-handlers";

import {
  registerRoute,
} from "../../../../../features/runtime/routes/route-registry";

import {
  PRODUCT_CATALOG_ROUTE,
} from "../routes/product-catalog.routes";

import {
  registerProductForm,
} from "../registry/register-product-form";

export function bootstrapProductCatalog() {
  registerProductForm();
  registerRoute(PRODUCT_CATALOG_ROUTE);
}
