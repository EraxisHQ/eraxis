import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

export const SALES_FORM: FormSchema = {
  id: "sales",
  title: "Sales",
  fields: [
    {
      id: "saleNo",
      label: "Sale No",
      type: "text",
      required: true,
    },
    {
      id: "saleDate",
      label: "Sale Date",
      type: "date",
      required: true,
    },
    {
      id: "customerId",
      label: "Customer",
      type: "select",
      required: true,
      optionsProvider: "customers",
    },
    {
      id: "items",
      label: "Sales Items",
      type: "table",
      required: true,
      tableColumns: [
        {
          id: "productId",
          label: "Product",
          type: "select",
          required: true,
          optionsProvider: "products",
        },
        {
          id: "quantity",
          label: "Quantity",
          type: "number",
          required: true,
        },
        {
          id: "unitPrice",
          label: "Unit Price",
          type: "number",
          required: true,
        },
        {
          id: "discount",
          label: "Discount",
          type: "number",
          required: false,
        },
        {
          id: "tax",
          label: "Tax",
          type: "number",
          required: false,
        },
        {
          id: "total",
          label: "Total",
          type: "number",
          required: false,
        },
      ],
    },
    {
      id: "remarks",
      label: "Remarks",
      type: "textarea",
      required: false,
    },
    {
      id: "status",
      label: "Status",
      type: "select",
      required: true,
      options: [
        {
          label: "Draft",
          value: "Draft",
        },
        {
          label: "Completed",
          value: "Completed",
        },
      ],
    },
  ],
  onSubmit: async () => {},
};
