import type {
  FormSchema,
} from "../types/form-schema";

export const
  PRODUCT_FORM:
    FormSchema = {

    id: "product",

    title:
      "Product",

    fields: [

      {
        id: "name",

        label: "Name",

        type: "text",

        required: true,
        
        validation: {

          minLength: 3,
        },
      },

      {
        id: "sku",

        label: "SKU",

        type: "text",

        required: true,
      },
    ],
  };
