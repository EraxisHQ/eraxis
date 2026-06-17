import type {
  Tax,
} from "../types/tax";

export const
TAX_REGISTRY:
  Tax[] = [
    {
      id: "tax-001",

      code: "GST18",

      name: "GST 18%",

      percentage: 18,

      active: true,
    },
  ];
