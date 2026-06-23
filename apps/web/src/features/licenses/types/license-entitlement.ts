export type LicenseEntitlement = {
  maxUsers: number;

  maxLocations: number;

  maxBrands: number;

  maxBranches: number;

  storageLimitGb: number;

  enabledApplications: string[];

  enabledPlugins: string[];
};
