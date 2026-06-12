import {
  createContext,
} from "react";

import type {
  StorageFile,
} from "../types/storage-file";

export const StorageContext =
  createContext<StorageFile[]>([]);
