import { useEffect, useState } from "react";

import { KpiCard } from "../components/kpi-card";

import { getDashboardData } from "../services/dashboard-service";

export function DashboardPage() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    getDashboardData().then(setData);
  }, []);

  return (
    <>
      <h1>Commerce Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "16px",
        }}
      >
        <KpiCard
          title="Sales"
          value={data?.sales.totalSales ?? 0}
        />

        <KpiCard
          title="Purchases"
          value={data?.purchase.totalPurchases ?? 0}
        />

        <KpiCard
          title="Inventory"
          value={data?.inventory.totalInventoryItems ?? 0}
        />
      </div>
    </>
  );
}
