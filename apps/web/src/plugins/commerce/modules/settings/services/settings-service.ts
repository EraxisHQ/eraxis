import type { CommerceSettings } from "../types/commerce-settings";

let settings: CommerceSettings = {
  currency: "INR",
  invoicePrefix: "INV",
  purchasePrefix: "PO",
  salesPrefix: "SO",
  decimalPlaces: 2,
};

export function getCommerceSettings() {
  return settings;
}

export function saveCommerceSettings(
  next: CommerceSettings,
) {
  settings = next;
}
