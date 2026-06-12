import {
  useContext,
} from "react";

import {
  MediaContext,
} from "../context/media-context";

export function useMedia() {

  return useContext(
    MediaContext
  );
}
