import { useState } from "react";

import {
  getEditingId,
  getFormValues,
  setEditingId,
  setFormValues,
  subscribeFormSession,
} from "../services/form-session-service";

import {
  useEffect,
} from "react";

export function useForm() {
 const [values, setValues] =
  useState(
    getFormValues(),
  );

  const [errors, setErrors] =
    useState<Record<string, string>>({});

 const [editingId, setEditingIdState] =
  useState(
    getEditingId(),
  );

useEffect(() => {
  return subscribeFormSession(
    () => {
      setValues(
        getFormValues(),
      );

      setEditingIdState(
        getEditingId(),
      );
    },
  );
}, []);

function updateValue(
  fieldId: string,
  value: unknown,
) {
  const next = {
    ...values,
    [fieldId]: value,
  };

  setFormValues(next);
}

function removeValue(
  fieldId: string,
) {
  const next = {
    ...values,
  };

  delete next[fieldId];

  setFormValues(next);
}

 function updateFormValues(
  values: Record<string, unknown>,
) {
  setFormValues(
    values,
  );
}


  return {
    values,
    errors,
    editingId,
    setErrors,
    updateValue,
    removeValue,
    setFormValues:updateFormValues,
    setEditingId,
  };
}
