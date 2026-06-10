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

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <ThemeProvider>
      <LocalizationProvider>
        <PluginProvider>
          <ApplicationProvider>
            <TenantProvider>
              <UserProvider>
                <PermissionProvider>
                  <App />
                </PermissionProvider>
              </UserProvider>
            </TenantProvider>
          </ApplicationProvider>
        </PluginProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);