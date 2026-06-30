import {
  bootstrapPlugins,
} from "./plugin-bootstrap";

import {
  bootstrapModules,
} from "./module-bootstrap";

import {
  bootstrapRoutes,
} from "./route-bootstrap";

import {
  bootstrapNavigation,
} from "./navigation-bootstrap";

import {
  bootstrapPermissions,
} from "./permission-bootstrap";

import {
  bootstrapSearch,
} from "./search-bootstrap";

import {
  bootstrapCommands,
} from "./command-bootstrap";

import {
  bootstrapSettings,
} from "./setting-bootstrap";

import { bootstrapEvents } from "./event-bootstrap";

import {
  bootstrapJobs,
} from "./job-bootstrap";

import {
  bootstrapFeatureFlags,
} from "./feature-flag-bootstrap";

import {
  bootstrapDashboard,
} from "./dashboard-bootstrap";

import {
  bootstrapApplications,
} from "./application-bootstrap";

export function bootstrapRuntime() {
  bootstrapPlugins();
  bootstrapModules();
  bootstrapRoutes();
  bootstrapNavigation();
  bootstrapPermissions();
  bootstrapSearch();
  bootstrapCommands();
  bootstrapSettings();
  bootstrapEvents();
  bootstrapJobs();
  bootstrapFeatureFlags();
  bootstrapDashboard();
  bootstrapApplications();
}
