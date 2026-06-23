export type MetadataFieldType =
  | "text"
  | "number"
  | "date"
  | "boolean"
  | "select";

export type MetadataField = {
  id: string;
  entityId: string;
  name: string;
  code: string;
  fieldType: MetadataFieldType;
  required: boolean;
};
