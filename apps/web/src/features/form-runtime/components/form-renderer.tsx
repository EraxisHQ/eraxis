/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Dynamic form renderer.
 *
 * Milestone:
 * M004-03-01
 * =====================================
 */

import type { FormSchema } from "../types/form-schema";

import { useForm } from "../hooks/use-form";

// import { validateForm } from "../lib/validate-form";

import { validateForm } from "../services/form-validation-service";

import { FieldRenderer } from "./fields/field-renderer";

import { getSubmitHandler } from "../services/form-submit-registry";

import { isFieldVisible } from "../services/form-visibility-service";
interface Props {
  schema: FormSchema;
}

export function FormRenderer({ schema }: Props) {
  const { values, errors, setErrors, updateValue } = useForm();
  console.log(schema.fields);

  return (
    <>
      <form>
        <h2>{schema.title}</h2>

        {schema.fields
          .filter((field) => isFieldVisible(field, values))
          .map((field) => (
            <div key={field.id}>
              <label>{field.label}</label>

              <FieldRenderer
                field={field}
                value={values[field.id]}
                onChange={updateValue}
              />

              {errors[field.id] && <div>{errors[field.id]}</div>}
            </div>
          ))}

        {schema.onSubmit && (
          <button
            type="button"
            onClick={async () => {
              const validationErrors = validateForm(schema.fields, values);

              setErrors(validationErrors);

              if (Object.keys(validationErrors).length > 0) {
                return;
              }

              // await schema.onSubmit?.(values);
              const submitHandler = getSubmitHandler(schema.id);

              if (submitHandler) {
                await submitHandler(values);
              }
            }}
          >
            Submit
          </button>
        )}
      </form>

      <div>
        <h3>Form State</h3>

        <pre>{JSON.stringify(values, null, 2)}</pre>
      </div>
    </>
  );
}
