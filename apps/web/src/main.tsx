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

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <ThemeProvider>
      <LocalizationProvider>
        <UserProvider>
          <PermissionProvider>
            <App />
          </PermissionProvider>
        </UserProvider>
      </LocalizationProvider>
    </ThemeProvider>
  </StrictMode>
);