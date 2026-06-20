import type { ReportDefinition } from "../types/report-definition";

export const PRODUCT_REPORT: ReportDefinition = {
  id: "products",

  title: "Products",

  columns: [
    {
      id: "name",
      label: "Name",
      accessor: "name",
    },

    {
      id: "sku",
      label: "SKU",
      accessor: "sku",
    },

    {
      id: "price",
      label: "Price",
      accessor: "price",
    },
  ],
};
