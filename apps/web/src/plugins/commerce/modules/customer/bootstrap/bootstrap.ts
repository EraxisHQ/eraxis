import "../registry/register-customer-submit-handler";

import { registerCustomerForm } from "../registry/register-customer-form";
import { registerRoute } from "../../../../../features/runtime/routes/route-registry";
import { CUSTOMER_ROUTE } from "../routes/customer.routes";

export function bootstrapCustomer() {
  registerCustomerForm();
  registerRoute(CUSTOMER_ROUTE);
}