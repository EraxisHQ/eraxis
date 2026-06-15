/**
 * =====================================
 * Eraxis
 * Module: Application Registration
 *
 * Purpose:
 * Runtime registration of applications.
 *
 * Milestone:
 * M001-02-03
 * =====================================
 */

import type {
  Application,
} from "../types/application";

import {
  APPLICATION_REGISTRY,
} from "../registry/application-registry";

export function registerApplication(
  application: Application
) {
  APPLICATION_REGISTRY.push(
    application
  );
}