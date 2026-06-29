import {
  registerReport,
} from "../../../../../features/report-runtime/registry/report-registry";

import {
  PRODUCT_REPORT,
} from "../../../../../features/report-runtime/reports/product-report";

export function
registerProductReport() {
  registerReport(
    PRODUCT_REPORT,
  );
}
