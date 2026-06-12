import {
  StorageContext,
} from "../context/storage-context";

import {
  DEFAULT_STORAGE_FILES,
} from "../constants/default-storage-files";

type Props = {
  children: React.ReactNode;
};

export function StorageProvider({
  children,
}: Props) {

  return (
    <StorageContext.Provider
      value={DEFAULT_STORAGE_FILES}
    >
      {children}
    </StorageContext.Provider>
  );
}
