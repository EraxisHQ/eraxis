import "./breadcrumbs.css";

import {
  useBreadcrumbs,
} from "../hooks/use-breadcrumbs";

export default function Breadcrumbs() {
  const breadcrumbs =
    useBreadcrumbs();

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(
        (item) => (
          <span
            key={item.path}
          >
            {item.label}
          </span>
        )
      )}
    </div>
  );
}