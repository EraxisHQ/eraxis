import "../registry/register-purchase-submit-handler";

import { registerPurchaseForm } from "../registry/register-purchase-form";

import { registerRoute } from "../../../../../features/runtime/routes/route-registry";

import { PURCHASE_ROUTE } from "../routes/purchase.routes";

export function bootstrapPurchase() {
  registerPurchaseForm();
  registerRoute(PURCHASE_ROUTE);
}