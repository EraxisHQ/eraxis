import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  loadOrderItems,
} from "../../features/orders/services/order-item-loader-service";

import {
  calculateOrderTotal,
} from "../../features/orders/services/order-calculation-service";

export default function OrdersPage() {

  const items =
    loadOrderItems();

  const total =
    calculateOrderTotal(
      items
    );
  return (
    <DashboardLayout>

      <h1>
        Orders
      </h1>

      <p>
        Order Foundation
      </p>
      <p>
        Order Total:
        ₹{total}
      </p>

    </DashboardLayout>
  );
}
