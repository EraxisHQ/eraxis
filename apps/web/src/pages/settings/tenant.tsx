import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useTenant,
} from "../../features/tenants/hooks/use-tenant";

import "./settings.css";

export default function TenantSettingsPage() {

  const tenant =
    useTenant();

  return (
    <DashboardLayout>

      <h1>
        Tenant Settings
      </h1>

      <div className="settings-card">

        <h2>
          Tenant Information
        </h2>

        <p>
          Name:
          {" "}
          {tenant.name}
        </p>

        <p>
          Status:
          Active
        </p>

      </div>

    </DashboardLayout>
  );
}