import { useMemo } from "react";
import { MetadataContext } from "../context/metadata-context";
import { metadataService } from "../services/metadata.service";

type Props = {
  children: React.ReactNode;
};

export function MetadataProvider({ children }: Props) {
  const entities = useMemo(
    () => metadataService.getAll(),
    [],
  );

  return (
    <MetadataContext.Provider
      value={{ entities }}
    >
      {children}
    </MetadataContext.Provider>
  );
}
