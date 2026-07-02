
import "../registry/register-supplier-submit-handler";

import { registerSupplierForm } from "../registry/register-supplier-form";

import { registerRoute } from "../../../../../features/runtime/routes/route-registry";

import { SUPPLIER_ROUTE } from "../routes/supplier.routes";

export function bootstrapSupplier() {
  registerSupplierForm();
  registerRoute(SUPPLIER_ROUTE);
}