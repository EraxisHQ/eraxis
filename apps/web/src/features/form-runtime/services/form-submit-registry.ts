import type { FormSubmitHandler } from "../types/form-submit-handler";

const handlers = new Map<string, FormSubmitHandler>();

export function registerSubmitHandler(
  formId: string,
  handler: FormSubmitHandler,
) {
  handlers.set(formId, handler);
}

export function getSubmitHandler(formId: string) {
  return handlers.get(formId);
}
