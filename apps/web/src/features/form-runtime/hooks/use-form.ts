import {
  useState,
} from "react";

export function
  useForm() {

  const [
    values,
    setValues,
  ] = useState<
    Record<
      string,
      unknown
    >
  >({});

  function updateValue(
    fieldId: string,
    value: unknown,
  ) {

    setValues(
      current => ({
        ...current,
        [fieldId]:
          value,
      }),
    );
  }

  return {

    values,

    updateValue,
  };
}
