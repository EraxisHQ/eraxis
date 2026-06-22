import DashboardLayout from "../../shell/dashboard-layout/dashboard-layout";

import UserTable from "../../features/user-management/components/user-table";
import { UserManagementProvider } from "../../features/user-management/providers/user-management-provider";
export default function UsersPage() {
  return (
    <DashboardLayout>
      <h1>User Management</h1>

      <UserManagementProvider>
        <UserTable />
      </UserManagementProvider>
    </DashboardLayout>
  );
}
