import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import RoleTable
  from "../../features/role-management/components/role-table";

export default function RolesPage() {

  return (
    <DashboardLayout>

      <h1>
        Role Management
      </h1>

      <RoleTable />

    </DashboardLayout>
  );
}
