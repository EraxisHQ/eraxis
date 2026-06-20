/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Form field contract.
 *
 * Milestone:
 * M004-01-01
 * =====================================
 */

import type { FormValidation } from "./form-validation";

export interface FormField {
  id: string;

  label: string;

  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "checkbox"
    | "select"
    | "textarea";

  required: boolean;

  section?: string;

  layout?: {
    colSpan?: 1 | 2 | 3 | 4;
  };

  validation?: FormValidation;

  requiredWhen?: {
    field: string;
    equals: unknown;
  };

  options?: {
    label: string;
    value: string;
  }[];

  visibleWhen?: {
    field: string;
    equals: unknown;
  };
}
