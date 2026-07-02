import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

export const SUPPLIER_FORM: FormSchema = {
  id: "supplier",
  title: "Supplier",
  fields: [
    { id: "code", label: "Supplier Code", type: "text", required: true },
    { id: "name", label: "Supplier Name", type: "text", required: true },
    { id: "mobile", label: "Mobile", type: "text", required: true },
    { id: "email", label: "Email", type: "text", required: false },
    { id: "address", label: "Address", type: "textarea", required: false },
    { id: "gstNumber", label: "GST Number", type: "text", required: false },
    { id: "active", label: "Active", type: "checkbox", required: false },
  ],
  onSubmit: async () => {},
};
