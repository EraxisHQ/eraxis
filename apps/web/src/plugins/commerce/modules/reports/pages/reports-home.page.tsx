import { useEffect, useState } from "react";

import { ReportCard } from "../components/report-card";

import { getSalesReport } from "../services/sales-report-service";
import { getPurchaseReport } from "../services/purchase-report-service";
import { getInventoryReport } from "../services/inventory-report-service";

export function ReportsHomePage() {
  const [sales, setSales] = useState<any>();
  const [purchase, setPurchase] = useState<any>();
  const [inventory, setInventory] = useState<any>();

  useEffect(() => {
    async function load() {
      setSales(await getSalesReport());

      setPurchase(await getPurchaseReport());

      setInventory(await getInventoryReport());
    }

    load();
  }, []);

  return (
    <>
      <h1>Commerce Reports</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "16px",
        }}
      >
        <ReportCard
          title="Sales"
          value={sales?.totalSales ?? 0}
        />

        <ReportCard
          title="Purchases"
          value={purchase?.totalPurchases ?? 0}
        />

        <ReportCard
          title="Inventory"
          value={inventory?.totalInventoryItems ?? 0}
        />
      </div>
    </>
  );
}
