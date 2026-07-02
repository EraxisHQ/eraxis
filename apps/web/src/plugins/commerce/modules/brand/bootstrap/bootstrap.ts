import "../registry/register-brand-submit-handler";
import { registerBrandForm } from "../registry/register-brand-form";
import { registerRoute } from "../../../../../features/runtime/routes/route-registry";
import { BRAND_ROUTE } from "../routes/brand.routes";

export function bootstrapBrand() {
  registerBrandForm();
  registerRoute(BRAND_ROUTE);
}