/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Form schema contract.
 *
 * Milestone:
 * M004-01-02
 * =====================================
 */

import type {
  FormField,
} from "./form-field";

import type {
  FormSubmitHandler,
} from "./form-submit-handler";

export interface FormSchema {

  id: string;

  title: string;

  fields: FormField[];

  onSubmit?:
  FormSubmitHandler;
}
