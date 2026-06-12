import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import BranchTable
  from "../../features/branch-management/components/branch-table";

export default function BranchesPage() {

  return (
    <DashboardLayout>

      <h1>
        Branch Management
      </h1>

      <BranchTable />

    </DashboardLayout>
  );
}
