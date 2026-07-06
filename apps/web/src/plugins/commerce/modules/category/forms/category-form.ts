import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

export const CATEGORY_FORM: FormSchema = {
  id: "category",

  title: "Category",

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