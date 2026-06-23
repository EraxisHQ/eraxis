import { useContext } from "react";
import { MetadataContext } from "../context/metadata-context";

export function useMetadata() {
  return useContext(MetadataContext);
}
