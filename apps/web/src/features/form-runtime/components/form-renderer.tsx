/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Dynamic form renderer.
 *
 * Milestone:
 * M004-02-01
 * =====================================
 */

import type {
  FormSchema,
} from "../types/form-schema";

interface Props {

  schema:
    FormSchema;
}

export function
FormRenderer({
  schema,
}: Props) {

  return (

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
              />

            </div>
          ),
        )
      }

    </form>
  );
}
