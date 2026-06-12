import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

import {
  ThemeProvider,
} from "./features/theme/context/theme-context";

import {
  LocalizationProvider,
} from "./features/localization/context/localization-context";

import {
  PermissionProvider,
} from "./features/rbac/providers/permission-provider";

import {
  UserProvider,
} from "./features/users/providers/user-provider";

import {
  TenantProvider,
} from "./features/tenants/providers/tenant-provider";

import {
  ApplicationProvider,
} from "./features/application-registry/providers/application-provider";

import {
  PluginProvider,
} from "./features/plugin-registry/providers/plugin-provider";

import {
  ProfileProvider,
} from "./features/profile/providers/profile-provider";

import {
  NotificationProvider,
} from "./features/notifications/providers/notification-provider";

import {
  AuditProvider,
} from "./features/audit/providers/audit-provider";

import {
  DashboardProvider,
} from "./features/dashboard/providers/dashboard-provider";

import {
  SearchProvider,
} from "./features/search/providers/search-provider";

import {
  CommandProvider,
} from "./features/command-palette/providers/command-provider";

import {
  FeatureFlagProvider,
} from "./features/feature-flags/providers/feature-flag-provider";

import {
  UserPreferencesProvider,
} from "./features/user-preferences/providers/user-preferences-provider";

import {
  ActivityProvider,
} from "./features/activity-center/providers/activity-provider";

import {
  StorageProvider,
} from "./features/file-storage/providers/storage-provider";

import {
  MediaProvider,
} from "./features/media-library/providers/media-provider";

import {
  RealtimeProvider,
} from "./features/realtime-events/providers/realtime-provider";

import {
  HealthProvider,
} from "./features/system-health/providers/health-provider";

import {
  UserManagementProvider,
} from "./features/user-management/providers/user-management-provider";

import {
  RoleProvider,
} from "./features/role-management/providers/role-provider";

import {
  PermissionManagementProvider,
} from "./features/permission-management/providers/permission-management-provider";

import {
  TenantManagementProvider,
} from "./features/tenant-management/providers/tenant-management-provider";

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <ThemeProvider>
      <LocalizationProvider>
        <ProfileProvider>
          <PluginProvider>
            <ApplicationProvider>
              <NotificationProvider>
                <AuditProvider>
                  <DashboardProvider>
                    <SearchProvider>
                      <TenantManagementProvider>
                      <PermissionManagementProvider>
                        <RoleProvider>
                          <UserManagementProvider>
                            <HealthProvider>
                              <RealtimeProvider>
                                <MediaProvider>
                                  <StorageProvider>
                                    <ActivityProvider>
                                      <UserPreferencesProvider>
                                        <FeatureFlagProvider>
                                          <CommandProvider>
                                            <TenantProvider>
                                              <UserProvider>
                                                <PermissionProvider>
                                                  <App />
                                                </PermissionProvider>
                                              </UserProvider>
                                            </TenantProvider>
                                          </CommandProvider>
                                        </FeatureFlagProvider>
                                      </UserPreferencesProvider>
                                    </ActivityProvider>
                                  </StorageProvider>
                                </MediaProvider>
                              </RealtimeProvider>
                            </HealthProvider>
                          </UserManagementProvider>
                        </RoleProvider>
                      </PermissionManagementProvider>
                      </TenantManagementProvider>
                    </SearchProvider>
                  </DashboardProvider>
                </AuditProvider>
              </NotificationProvider>
            </ApplicationProvider>
          </PluginProvider>
        </ProfileProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode >
);
