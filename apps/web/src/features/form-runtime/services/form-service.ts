import { getForm } from "../registry/form-registry";

export function loadForm(formId: string) {
  return getForm(formId);
}
