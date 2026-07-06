import type { FormSchema } from "../../../../../features/form-runtime/types/form-schema";

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
      optionsProvider: "product-categories",
    },

    {
      id: "warrantyMonths",
      label: "Warranty Months",
      type: "number",
      required: false,
      section: "Pricing",
    },
  ],

  rules: [
    {
      when: {
        field: "category",
        equals: "electronics",
      },
      then: {
        action: "show",
        target: "warrantyMonths",
      },
    },
    {
      when: {
        field: "active",
        equals: false,
      },
      then: {
        action: "disable",
        target: "price",
      },
    },
  ],

onSubmit: async () => {
  // Placeholder only.
  // Actual submission is handled by register-submit-handlers.ts
},

};
