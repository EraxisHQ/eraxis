import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useLocalization,
} from "../../features/localization/hooks/use-localization";

import {
  loadOrderItems,
} from "../../features/orders/services/order-item-loader-service";

import {
  calculateOrderTotal,
} from "../../features/orders/services/order-calculation-service";

import {
  hasAvailableStock,
} from "../../features/inventory/services/inventory-validation-service";

export default function OrdersPage() {

  const {
    translations,
  } = useLocalization();

  const items =
    loadOrderItems();

  const total =
    calculateOrderTotal(
      items
    );

  const inStock =
    hasAvailableStock(
      "product-001",
      2
    );

  return (
    <DashboardLayout>

      <h1>
        {translations.orders}
      </h1>

      <p>
        {
          translations
            .orderFoundation
        }
      </p>

      <p>
        Order Total:
        ₹{total}
      </p>

      <p>
        Stock Available:
        {inStock
          ? " Yes"
          : " No"}
      </p>

    </DashboardLayout>
  );
}