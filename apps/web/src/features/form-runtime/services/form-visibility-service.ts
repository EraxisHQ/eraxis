import type { FormField } from "../types/form-field";

export function isFieldVisible(
  field: FormField,
  values: Record<string, unknown>,
) {
  if (!field.visibleWhen) {
    return true;
  }

  return values[field.visibleWhen.field] === field.visibleWhen.equals;
}
