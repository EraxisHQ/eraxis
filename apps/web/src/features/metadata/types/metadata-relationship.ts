export interface MetadataRelationship {
  id: string;

  sourceEntityId: string;

  targetEntityId: string;

  type:
    | "one-to-one"
    | "one-to-many"
    | "many-to-many";
}
