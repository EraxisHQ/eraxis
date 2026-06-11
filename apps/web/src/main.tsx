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
		    <CommandProvider>
                      <TenantProvider>
                        <UserProvider>
                          <PermissionProvider>
                            <App />
                          </PermissionProvider>
                        </UserProvider>
                      </TenantProvider>
		      </CommandProvider>
                    </SearchProvider>
                  </DashboardProvider>
                </AuditProvider>
              </NotificationProvider>
            </ApplicationProvider>
          </PluginProvider>
        </ProfileProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);
