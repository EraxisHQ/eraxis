import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import UserTable
  from "../../features/user-management/components/user-table";

export default function UsersPage() {

  return (
    <DashboardLayout>

      <h1>
        User Management
      </h1>

      <UserTable />

    </DashboardLayout>
  );
}
