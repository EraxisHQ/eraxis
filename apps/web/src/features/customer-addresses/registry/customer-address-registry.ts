import type {
  CustomerAddress,
} from "../types/customer-address";

export const
  CUSTOMER_ADDRESS_REGISTRY:
    CustomerAddress[] = [
      {
        id: "address-001",

        customerId:
          "customer-001",

        type: "billing",

        line1:
          "123 Main Street",

        city:
          "Bhubaneswar",

        state:
          "Odisha",

        country:
          "India",

        postalCode:
          "751001",

        active: true,
      },
    ];
