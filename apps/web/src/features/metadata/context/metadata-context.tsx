import { createContext } from "react";
import type { MetadataEntity } from "../types/metadata-entity";

export type MetadataContextType = {
  entities: MetadataEntity[];
};

export const MetadataContext =
  createContext<MetadataContextType>({
    entities: [],
  });
