// import {
//   useContext,
// } from "react";

// import {
//   StorageContext,
// } from "../context/storage-context";

// export function useStorage() {

//   return useContext(
//     StorageContext
//   );
// }

import {
  storageService,
} from "../services/storage-service";

export function useStorage() {

  return storageService;
}