import {
  createContext,
} from "react";

import type {
  SearchItem,
} from "../types/search-item";

export const SearchContext =
  createContext<SearchItem[]>([]);