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

import type {
  FormSchema,
} from "../types/form-schema";

import {
  useForm,
} from "../hooks/use-form";

interface Props {

  schema:
  FormSchema;
}

export function
  FormRenderer({
    schema,
  }: Props) {


  const {
    values,
    errors,
    updateValue,
  } = useForm();

  return (

    <>

      <form>

        <h2>
          {schema.title}
        </h2>

        {
          schema.fields.map(
            field => (

              <div
                key={field.id}
              >

                <label>

                  {field.label}

                </label>

                <input
                  type={
                    field.type
                  }

                  value={
                    String(
                      values[
                      field.id
                      ] ?? ""
                    )
                  }

                  onChange={
                    event =>
                      updateValue(
                        field.id,
                        event.target.value,
                      )
                  }

                />

                {
                  errors[
                  field.id
                  ] && (

                    <div>

                      {
                        errors[
                        field.id
                        ]
                      }

                    </div>
                  )
                }

              </div>
            ),

            <button
              type="button"
              onClick={
                async () => {

                  await schema
                    .onSubmit?.(
                      values,
                    );
                }
              }
            >

              Submit

            </button>
          )
        }

        <button
          type="button"
          onClick={
            async () => {

              await schema
                .onSubmit?.(
                  values,
                );
            }
          }
        >

          Submit

        </button>


      </form>

      <div>

        <h3>
          Form State
        </h3>

        <pre>
          {
            JSON.stringify(
              values,
              null,
              2,
            )
          }
        </pre>

      </div>

    </>

  );
}