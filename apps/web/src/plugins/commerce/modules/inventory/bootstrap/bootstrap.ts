import "../registry/register-inventory-submit-handler";

import { registerInventoryForm } from "../registry/register-inventory-form";

import { registerRoute } from "../../../../../features/runtime/routes/route-registry";

import { INVENTORY_ROUTE } from "../routes/inventory.routes";

export function bootstrapInventory() {
  registerInventoryForm();
  registerRoute(INVENTORY_ROUTE);
}