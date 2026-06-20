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

  const sections = schema.fields.reduce(
    (acc, field) => {
      const section = field.section ?? "General";

      if (!acc[section]) {
        acc[section] = [];
      }

      acc[section].push(field);

      return acc;
    },
    {} as Record<string, typeof schema.fields>,
  );

  return (
    <>
      <h2>{schema.title}</h2>

      <form
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        {Object.entries(sections).map(([sectionName, fields]) => (
          <div
            key={sectionName}
            style={{
              gridColumn: "span 2",
              border: "1px solid #ddd",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3>{sectionName}</h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {fields
                .filter((field) => isFieldVisible(field, values))
                .map((field) => (
                  <div
                    key={field.id}
                    style={{
                      gridColumn: `span ${field.layout?.colSpan ?? 1}`,
                    }}
                  >
                    <label>{field.label}</label>

                    <FieldRenderer
                      field={field}
                      value={values[field.id]}
                      onChange={updateValue}
                    />

                    {errors[field.id] && <div>{errors[field.id]}</div>}
                  </div>
                ))}
            </div>
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
