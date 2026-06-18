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

import type {
  FormValidation,
} from "./form-validation";

export interface FormField {

  id: string;

  label: string;

  type:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "select";

  required: boolean;

  validation?:
  FormValidation;
}
