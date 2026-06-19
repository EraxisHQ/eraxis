import type { FormSchema } from "../types/form-schema";

export const PRODUCT_FORM: FormSchema = {
  id: "product",

  title: "Product",

  fields: [
    {
      id: "name",

      label: "Name",

      type: "text",

      required: true,

      validation: {
        minLength: 3,
        maxLength: 50,
      },
    },

    {
      id: "sku",

      label: "SKU",

      type: "text",

      required: true,
    },

    {
      id: "active",
      label: "Active",
      type: "checkbox",
      required: false,
    },

    {
      id: "price",
      label: "Price",
      type: "number",
      required: false,
    },
    {
      id: "description",

      label: "Description",

      type: "textarea",

      required: false,
    },

    {
      id: "category",
      label: "Category",
      type: "select",
      required: true,
      validation: {
        required: true,
      },
      options: [
        {
          label: "Electronics",
          value: "electronics",
        },
        {
          label: "Food",
          value: "food",
        },
      ],
    },
  ],

  onSubmit: async (values) => {
    console.log("SUBMIT", values);
  },
};
