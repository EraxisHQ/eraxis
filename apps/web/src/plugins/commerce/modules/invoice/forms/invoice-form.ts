import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

export const INVOICE_FORM: FormSchema = {
  id: "invoice",
  title: "Invoice",
  fields: [
    {
      id: "invoiceNo",
      label: "Invoice No",
      type: "text",
      required: true,
    },
    {
      id: "saleId",
      label: "Sale",
      type: "select",
      required: true,
      optionsProvider: "sales",
    },
    {
      id: "customerId",
      label: "Customer",
      type: "select",
      required: true,
      optionsProvider: "customers",
    },
    {
      id: "invoiceDate",
      label: "Invoice Date",
      type: "date",
      required: true,
    },
    {
      id: "totalAmount",
      label: "Total Amount",
      type: "number",
      required: true,
    },
    {
      id: "taxAmount",
      label: "Tax Amount",
      type: "number",
      required: false,
    },
    {
      id: "discountAmount",
      label: "Discount",
      type: "number",
      required: false,
    },
    {
      id: "netAmount",
      label: "Net Amount",
      type: "number",
      required: true,
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
          label: "Issued",
          value: "Issued",
        },
        {
          label: "Paid",
          value: "Paid",
        },
        {
          label: "Cancelled",
          value: "Cancelled",
        },
      ],
    },
  ],
  onSubmit: async () => {},
};
