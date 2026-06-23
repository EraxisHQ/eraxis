export interface DynamicEntity {
  id: string;

  code: string;

  name: string;

  description?: string;

  active: boolean;

  fields: string[];
}
