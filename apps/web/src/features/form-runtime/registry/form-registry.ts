/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Runtime form registry.
 *
 * Milestone:
 * M004-03-02
 * =====================================
 */

import type { FormSchema } from "../types/form-schema";

const forms = new Map<string, FormSchema>();

export function registerForm(schema: FormSchema) {
  forms.set(schema.id, schema);
}

export function getForm(id: string) {
  return forms.get(id);
}

export function getForms() {
  return Array.from(forms.values());
}
