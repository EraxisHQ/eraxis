import DashboardLayout
  from "../../shell/dashboard-layout/dashboard-layout";

import {
  useProfile,
} from "../../features/profile/hooks/use-profile";

import {
  PermissionGuard,
} from "../../features/auth";

export default function ProfilePage() {
  const profile =
    useProfile();

  return (
    <DashboardLayout>
      <h1>Profile</h1>

      <p>
        Name:
        {profile.displayName}
      </p>

      <p>
        Email:
        {profile.email}
      </p>
      <p>
        Email:
        {profile.email}
      </p>

  
    </DashboardLayout>
  );
}