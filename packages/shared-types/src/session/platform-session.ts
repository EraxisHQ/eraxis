/**
 * =====================================
 * Eraxis
 * Platform Session
 *
 * Milestone:
 * P0002-01 Identity, Authentication & Security
 *
 * Purpose:
 * Shared authenticated platform session
 * available across the entire Eraxis platform.
 *
 * This is the single source of truth
 * for the authenticated user context.
 * =====================================
 */

export interface PlatformIdentity {
  userId: string;
  authUserId: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface PlatformOrganization {
  organizationId: string;
  organizationCode: string;
  organizationName: string;
}

export interface PlatformTenant {
  tenantId: string;
  tenantCode: string;
  tenantName: string;
}

export interface PlatformBranch {
  activeBranchId: string;
  accessibleBranchIds: string[];
}

export interface PlatformAuthorization {
  roles: string[];
  permissions: string[];
}

export interface PlatformFeatures {
  enabledPlugins: string[];
  enabledModules: string[];
  enabledFeatures: string[];
}

export interface PlatformLicensing {
  licenses: string[];
}

export interface PlatformPreferences {
  locale: string;
  timezone: string;
}

export interface PlatformSessionInfo {
  sessionId: string;
  authenticated: boolean;
  loginAt: string;
  expiresAt: string;
}

export interface PlatformSession {
  identity: PlatformIdentity;
  organization: PlatformOrganization;
  tenant: PlatformTenant;
  branch: PlatformBranch;
  authorization: PlatformAuthorization;
  features: PlatformFeatures;
  preferences: PlatformPreferences;
  session: PlatformSessionInfo;
}