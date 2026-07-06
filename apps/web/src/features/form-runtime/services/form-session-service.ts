/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Shared Form Session
 *
 * Milestone:
 * M004-04
 * =====================================
 */

type Listener = () => void;

let values:
  Record<string, unknown> = {};

let editingId:
  string | null = null;

const listeners =
  new Set<Listener>();

function notify() {
  listeners.forEach(
    listener => listener(),
  );
}

export function getFormValues() {
  return values;
}

export function getEditingId() {
  return editingId;
}

export function loadForm(
  id: string,
  formValues: Record<string, unknown>,
) {
  editingId = id;
  values = formValues;
  notify();
}

export function clearForm() {
  editingId = null;
  values = {};
  notify();
}

export function updateFormValues(
  formValues: Record<string, unknown>,
) {
  values = formValues;
  notify();
}

export function setFormValues(
  formValues: Record<string, unknown>,
) {
  updateFormValues(formValues);
}

export function setEditingId(
  id: string | null,
) {
  editingId = id;
  notify();
}

export function subscribeFormSession(
  listener: Listener,
): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}