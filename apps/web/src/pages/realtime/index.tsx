import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import RealtimeFeed
  from "../../features/realtime-events/components/realtime-feed";

export default function RealtimePage() {

  return (
    <DashboardLayout>

      <h1>
        Realtime Events
      </h1>

      <RealtimeFeed />

    </DashboardLayout>
  );
}
