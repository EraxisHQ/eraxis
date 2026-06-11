import {
  useContext,
} from "react";

import {
  SearchContext,
} from "../context/search-context";

export function useSearch() {
  return useContext(
    SearchContext
  );
}