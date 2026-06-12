import {
  createContext,
} from "react";

import type {
  MediaItem,
} from "../types/media-item";

export const MediaContext =
  createContext<MediaItem[]>([]);
