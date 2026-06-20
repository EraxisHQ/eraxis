/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Runtime validation.
 *
 * Milestone:
 * M004-07-01
 * =====================================
 */

import type { FormField } from "../types/form-field";

export function validateField(
  field: FormField,
  value: unknown,
  values: Record<string, unknown>,
): string | null {
  const text = String(value ?? "");

  if (field.requiredWhen) {
    const conditionMet =
      values[field.requiredWhen.field] === field.requiredWhen.equals;

    if (conditionMet) {
      const text = String(value ?? "");

      if (!text.trim()) {
        return `${field.label} is required`;
      }
    }
  }

  if (
    field.validation?.min !== undefined &&
    Number(value) < field.validation.min
  ) {
    return `${field.label} must be at least ${field.validation.min}`;
  }

  if (
    field.validation?.max !== undefined &&
    Number(value) > field.validation.max
  ) {
    return `${field.label} must not exceed ${field.validation.max}`;
  }

  if (
    field.validation?.gst &&
    text &&
    !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{3}$/.test(text)
  ) {
    return "Invalid GST Number";
  }

  if (field.required && !text.trim()) {
    return `${field.label} is required`;
  }

  if (field.validation?.minLength && text.length < field.validation.minLength) {
    return `${field.label} must be at least ${field.validation.minLength} characters`;
  }

  if (field.validation?.maxLength && text.length > field.validation.maxLength) {
    return `${field.label} must not exceed ${field.validation.maxLength} characters`;
  }

  return null;
}

export function validateForm(
  fields: FormField[],
  values: Record<string, unknown>,
) {
  const errors: Record<string, string> = {};

  fields.forEach((field) => {
    const error = validateField(field, values[field.id], values);

    if (error) {
      errors[field.id] = error;
    }
  });

  return errors;
}
