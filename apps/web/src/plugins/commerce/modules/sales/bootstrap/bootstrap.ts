import "../registry/register-sales-submit-handler";

import { registerSalesForm } from "../registry/register-sales-form";

import { registerRoute } from "../../../../../features/runtime/routes/route-registry";

import { SALES_ROUTE } from "../routes/sales.routes";

export function bootstrapSales() {
  registerSalesForm();
  registerRoute(SALES_ROUTE);
}
