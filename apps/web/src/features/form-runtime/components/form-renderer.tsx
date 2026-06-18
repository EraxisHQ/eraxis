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

import { validateForm } from "../lib/validate-form";

interface Props {
  schema: FormSchema;
}

export function FormRenderer({ schema }: Props) {
  const { values, errors, setErrors, updateValue } = useForm();

  return (
    <>
      <form>
        <h2>{schema.title}</h2>

        {schema.fields.map((field) => (
          <div key={field.id}>
            <label>{field.label}</label>

            {field.type === "select" ? (
              <select
                value={String(values[field.id] ?? "")}
                onChange={(event) => updateValue(field.id, event.target.value)}
              >
                <option value="">Select...</option>

                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === "checkbox" ? (
              <input
                type="checkbox"
                checked={Boolean(values[field.id])}
                onChange={(event) =>
                  updateValue(field.id, event.target.checked)
                }
              />
            ) : (
              <input
                type={field.type}
                value={String(values[field.id] ?? "")}
                onChange={(event) => updateValue(field.id, event.target.value)}
              />
            )}

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

              await schema.onSubmit?.(values);
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
