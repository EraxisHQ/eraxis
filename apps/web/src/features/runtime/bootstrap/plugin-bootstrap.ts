/**
 * =====================================
 * Eraxis Runtime
 *
 * Purpose:
 * Plugin bootstrap runtime.
 *
 * Milestone:
 * P0002
 * =====================================
 */

import {
  commercePlugin,
} from "../../../plugins/commerce";

import {
  registerPlugin,
} from "../plugins/plugin-registry";

export function bootstrapPlugins() {
  registerPlugin(
    commercePlugin,
  );
}
