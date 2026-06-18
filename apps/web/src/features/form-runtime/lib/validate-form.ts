import type { FormField } from "../types/form-field";

export function validateForm(
  fields: FormField[],
  values: Record<string, unknown>,
) {
  const errors: Record<string, string> = {};

  fields.forEach((field) => {
    const value = values[field.id];

    // if (field.validation?.required && (!value || String(value).trim() === "")) {
    if (field.required && (!value || String(value).trim() === "")) {
      errors[field.id] = `${field.label} is required`;
      return;
    }

    if (
      field.validation?.minLength &&
      typeof value === "string" &&
      value.length < field.validation.minLength
    ) {
      errors[field.id] =
        `${field.label} minimum ${field.validation.minLength} characters`;
    }

    if (
      field.validation?.maxLength &&
      typeof value === "string" &&
      value.length > field.validation.maxLength
    ) {
      errors[field.id] =
        `${field.label} maximum ${field.validation.maxLength} characters`;
    }
  });

  return errors;
}
