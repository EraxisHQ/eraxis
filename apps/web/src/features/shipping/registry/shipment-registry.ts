import type {
  Shipment,
} from "../types/shipment";

export const
SHIPMENT_REGISTRY:
  Shipment[] = [
    {
      id: "shipment-001",

      invoiceId:
        "invoice-001",

      trackingNumber:
        "TRK001",

      carrier:
        "Eraxis Logistics",

      status:
        "shipped",

      shippedDate:
        "2026-01-01",
    },
  ];
