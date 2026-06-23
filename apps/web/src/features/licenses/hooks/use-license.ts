import { useContext } from "react";

import { LicenseContext } from "../context/license-context";

export function useLicense() {
  return useContext(LicenseContext);
}
