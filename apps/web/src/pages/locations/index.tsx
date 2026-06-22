import DashboardLayout from "../../shell/dashboard-layout/dashboard-layout";

import LocationTable from "../../features/location-management/components/location-table";

export default function LocationsPage() {
  return (
    <DashboardLayout>
      <h1>Location Management</h1>

      <LocationTable />
    </DashboardLayout>
  );
}
