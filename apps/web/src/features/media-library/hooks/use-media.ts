// import {
//   useContext,
// } from "react";

// import {
//   MediaContext,
// } from "../context/media-context";

// export function useMedia() {

//   return useContext(
//     MediaContext
//   );
// }

import {
  mediaService,
} from "../services/media-service";

export function useMedia() {

  return mediaService;
}