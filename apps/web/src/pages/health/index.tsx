import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import HealthDashboard
  from "../../features/system-health/components/health-dashboard";

export default function HealthPage() {

  return (
    <DashboardLayout>

      <h1>
        System Health
      </h1>

      <HealthDashboard />

    </DashboardLayout>
  );
}
