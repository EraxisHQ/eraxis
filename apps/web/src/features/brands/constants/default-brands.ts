import type { Brand } from "../types/brand";

export const DEFAULT_BRANDS: Brand[] = [
  {
    id: "brand-001",

    tenantId: "tenant-1",

    code: "ERAXIS",

    name: "Eraxis",

    companyName: "Eraxis Platform",

    logoUrl: "/branding/logo.svg",

    faviconUrl: "/favicon.svg",

    primaryColor: "#2563EB",

    secondaryColor: "#0F172A",

    website: "https://eraxis.com",

    active: true,
  },
];
