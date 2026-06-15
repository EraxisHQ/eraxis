/**
 * =====================================
 * Eraxis
 * Module: Plugin Application Service
 *
 * Purpose:
 * Resolves plugins belonging
 * to an application.
 *
 * Milestone:
 * M001-10-01
 * =====================================
 */

import type {
  Plugin,
} from "../types/plugin";

export function getApplicationPlugins(
  plugins: Plugin[],
  applicationCode: string
) {

  return plugins.filter(
    (plugin) =>
      plugin.applicationCode ===
      applicationCode
  );
}
