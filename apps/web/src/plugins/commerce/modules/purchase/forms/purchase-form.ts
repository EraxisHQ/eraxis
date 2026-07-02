import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

export const PURCHASE_FORM: FormSchema = {
  id: "purchase",
  title: "Purchase",
  fields: [
    {
      id: "purchaseNo",
      label: "Purchase No",
      type: "text",
      required: true,
    },
    {
      id: "purchaseDate",
      label: "Purchase Date",
      type: "date",
      required: true,
    },
    {
      id: "supplierId",
      label: "Supplier",
      type: "select",
      required: true,
      optionsProvider: "suppliers",
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
