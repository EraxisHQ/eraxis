export type Brand = {
  id: string;

  tenantId: string;

  code: string;

  name: string;

  companyName?: string;

  logoUrl?: string;

  faviconUrl?: string;

  primaryColor?: string;

  secondaryColor?: string;

  website?: string;

  invoicePrefix?: string;

  reportHeader?: string;

  active: boolean;
};
