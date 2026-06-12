import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import PermissionTable
  from "../../features/permission-management/components/permission-table";

export default function PermissionsPage() {

  return (
    <DashboardLayout>

      <h1>
        Permission Management
      </h1>

      <PermissionTable />

    </DashboardLayout>
  );
}
