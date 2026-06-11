import "./search-bar.css";

import {
  useState,
} from "react";

import {
  useSearch,
} from "../hooks/use-search";

export default function SearchBar() {

  const [query, setQuery] =
    useState("");

  const items =
    useSearch();

  const filteredItems =
    items.filter(
      (item) =>
        item.label
          .toLowerCase()
          .includes(
            query.toLowerCase()
          )
    );

  return (
    <div className="search-container">

      <input
        className="search-box"
        placeholder="Search modules..."
        value={query}
        onChange={(event) =>
          setQuery(
            event.target.value
          )
        }
      />

      {query && (
        <div className="search-results">

          {filteredItems.map(
            (item) => (
              <div
                key={item.id}
              >
                {item.label}
              </div>
            )
          )}

        </div>
      )}

    </div>
  );
}