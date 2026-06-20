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
      section: "Basic Information",
      layout: {
        colSpan: 1,
      },

      validation: {
        minLength: 10,
        maxLength: 500,
      },
    },

    {
      id: "sku",
      label: "SKU",
      type: "text",
      required: true,
      section: "Basic Information",
      layout: {
        colSpan: 1,
      },
    },

    {
      id: "active",
      label: "Active",
      type: "checkbox",
      required: false,

      section: "Basic Information",
    },

    {
      id: "price",
      label: "Price",
      type: "number",
      validation: {
        min: 1,
        max: 1000000,
      },

      section: "Pricing",
      required: false,
    },
    {
      id: "description",
      label: "Description",
      type: "textarea",
      section: "Basic Information",
      required: false,
      layout: {
        colSpan: 2,
      },
    },
    {
      id: "isGstRegistered",
      label: "GST Registered",
      type: "checkbox",
      required: false,
      section: "Tax Information",
    },
    {
      id: "gstNumber",
      label: "GST Number",
      type: "text",
      validation: {
        gst: true,
      },
      required: false,
      section: "Tax Information",

      visibleWhen: {
        field: "isGstRegistered",
        equals: true,
      },

      requiredWhen: {
        field: "isGstRegistered",
        equals: true,
      },
    },

    {
      id: "category",
      label: "Category",
      type: "select",
      required: true,
      section: "Pricing",
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
