import { LicenseContext } from "../context/license-context";

import { getLicenses } from "../services/license.service";

export function LicenseProvider({ children }: { children: React.ReactNode }) {
  return (
    <LicenseContext.Provider value={getLicenses()}>
      {children}
    </LicenseContext.Provider>
  );
}
