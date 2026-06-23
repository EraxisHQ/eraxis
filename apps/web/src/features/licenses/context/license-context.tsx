import { createContext } from "react";

import type { License } from "../types/license";

export const LicenseContext = createContext<License[]>([]);
