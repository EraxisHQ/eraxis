import { createContext } from "react";

import type { Brand } from "../types/brand";

export const BrandContext = createContext<Brand[]>([]);
