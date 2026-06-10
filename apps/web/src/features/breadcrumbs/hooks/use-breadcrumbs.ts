import { useLocation }
  from "react-router-dom";

import {
  BREADCRUMB_LABELS,
} from "../config/breadcrumb.config";

export function useBreadcrumbs() {
  const location =
    useLocation();

  return [
    {
      label:
        BREADCRUMB_LABELS[
          location.pathname as keyof typeof BREADCRUMB_LABELS
        ] ??
        "Unknown",

      path:
        location.pathname,
    },
  ];
}