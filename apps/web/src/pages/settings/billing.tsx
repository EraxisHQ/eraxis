import DashboardLayout from "../../shell/dashboard-layout/dashboard-layout";

import { useBilling } from "../../features/billing/hooks/use-billing";

export default function BillingSettingsPage() {
  const plans = useBilling();

  return (
    <DashboardLayout>
      <h1>Billing</h1>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.code}</td>
              <td>{plan.name}</td>
              <td>{plan.active ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
