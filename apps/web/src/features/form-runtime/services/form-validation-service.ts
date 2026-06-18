/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Runtime validation.
 *
 * Milestone:
 * M004-04-04
 * =====================================
 */

import type {
  FormField,
} from "../types/form-field";

export function
validateField(
  field: FormField,
  value: unknown,
): string | null {

  const text =
    String(
      value ?? "",
    );

  if (
    field.required &&
    !text.trim()
  ) {

    return `${field.label} is required`;
  }

  if (
    field.validation?.minLength &&
    text.length <
      field.validation.minLength
  ) {

    return `${field.label} must be at least ${field.validation.minLength} characters`;
  }

  if (
    field.validation?.maxLength &&
    text.length >
      field.validation.maxLength
  ) {

    return `${field.label} must not exceed ${field.validation.maxLength} characters`;
  }

  return null;
}
