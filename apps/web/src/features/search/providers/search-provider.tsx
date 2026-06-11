import {
  SearchContext,
} from "../context/search-context";

import {
  DEFAULT_SEARCH_ITEMS,
} from "../constants/default-search-items";

type Props = {
  children: React.ReactNode;
};

export function SearchProvider({
  children,
}: Props) {
  return (
    <SearchContext.Provider
      value={DEFAULT_SEARCH_ITEMS}
    >
      {children}
    </SearchContext.Provider>
  );
}