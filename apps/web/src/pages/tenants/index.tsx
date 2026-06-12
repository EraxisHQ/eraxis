import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import TenantTable
  from "../../features/tenant-management/components/tenant-table";

export default function TenantsPage() {

  return (
    <DashboardLayout>

      <h1>
        Tenant Management
      </h1>

      <TenantTable />

    </DashboardLayout>
  );
}
