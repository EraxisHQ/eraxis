import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

export const BRAND_FORM: FormSchema = {
  id: "brand",
  title: "Brand",
  fields: [
    {
      id: "code",
      label: "Code",
      type: "text",
      required: true,
    },
    {
      id: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      id: "description",
      label: "Description",
      type: "textarea",
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
