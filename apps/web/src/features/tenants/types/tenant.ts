export type Tenant = {
  id: string;

  code: string;

  name: string;

  status:
    | "active"
    | "inactive";
};