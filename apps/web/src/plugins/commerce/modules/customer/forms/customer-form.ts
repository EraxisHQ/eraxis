import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

export const CUSTOMER_FORM: FormSchema = {
  id: "customer",
  title: "Customer",
  fields: [
    {
      id: "code",
      label: "Customer Code",
      type: "text",
      required: true,
    },
    {
      id: "name",
      label: "Customer Name",
      type: "text",
      required: true,
    },
    {
      id: "mobile",
      label: "Mobile",
      type: "text",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "text",
      required: false,
    },
    {
      id: "address",
      label: "Address",
      type: "textarea",
      required: false,
    },
    {
      id: "gstNumber",
      label: "GST Number",
      type: "text",
      required: false,
    },
    {
      id: "active",
      label: "Active",
      type: "checkbox",
      required: false,
    },
  ],
  onSubmit: async () => {},
};
