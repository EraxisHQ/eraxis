// /**
//  * =====================================
//  * Eraxis Form Runtime
//  *
//  * Purpose:
//  * Dynamic form renderer.
//  *
//  * Milestone:
//  * M004-03-01
//  * =====================================
//  */
// import { useEffect } from "react";
// import { evaluateRules } from "../services/form-rule-engine";

// import type { FormSchema } from "../types/form-schema";

// import { useForm } from "../hooks/use-form";

// // import { validateForm } from "../lib/validate-form";

// import { validateForm } from "../services/form-validation-service";

// import { FieldRenderer } from "./fields/field-renderer";

// import { getSubmitHandler } from "../services/form-submit-registry";

// import { isFieldVisible } from "../services/form-visibility-service";

// // import { evaluateRules } from "../services/form-rules-service";

// import { getSetValueActions } from "../services/form-actions-service";
// interface Props {
//   schema: FormSchema;
// }

// export function FormRenderer({ schema }: Props) {
//   const { values, errors, setErrors, updateValue } = useForm();

// const setValueActions =
//   getSetValueActions(activeRules);

//   const activeRules = evaluateRules(schema.rules ?? [], values);
//   console.log(schema.fields);

//   const sections = schema.fields.reduce(
//     (acc, field) => {
//       const section = field.section ?? "General";

//       if (!acc[section]) {
//         acc[section] = [];
//       }

//       acc[section].push(field);

//       return acc;
//     },
//     {} as Record<string, typeof schema.fields>,
//   );

//   function isRuleVisible(fieldId: string) {
//     const showRule = activeRules.find(
//       (rule) => rule.then.action === "show" && rule.then.target === fieldId,
//     );

//     if (showRule) {
//       return true;
//     }

//     const hasShowRule = (schema.rules ?? []).some(
//       (rule) => rule.then.action === "show" && rule.then.target === fieldId,
//     );

//     return !hasShowRule;
//   }

//   return (
//     <>
//       <h2>{schema.title}</h2>

//       <form
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: "16px",
//         }}
//       >
//         {Object.entries(sections).map(([sectionName, fields]) => (
//           <div
//             key={sectionName}
//             style={{
//               gridColumn: "span 2",
//               border: "1px solid #ddd",
//               padding: "16px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>{sectionName}</h3>

//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "1fr 1fr",
//                 gap: "16px",
//               }}
//             >
//               {fields
//                 .filter(
//                   (field) =>
//                     isFieldVisible(field, values) && isRuleVisible(field.id),
//                 )
//                 .map((field) => (
//                   <div
//                     key={field.id}
//                     style={{
//                       gridColumn: `span ${field.layout?.colSpan ?? 1}`,
//                     }}
//                   >
//                     <label>{field.label}</label>

//                     <FieldRenderer
//                       field={field}
//                       value={values[field.id]}
//                       onChange={updateValue}
//                     />

//                     {errors[field.id] && <div>{errors[field.id]}</div>}
//                   </div>
//                 ))}
//             </div>
//           </div>
//         ))}

//         {schema.onSubmit && (
//           <button
//             type="button"
//             onClick={async () => {
//               const validationErrors = validateForm(schema.fields, values);

//               setErrors(validationErrors);

//               if (Object.keys(validationErrors).length > 0) {
//                 return;
//               }

//               // await schema.onSubmit?.(values);
//               const submitHandler = getSubmitHandler(schema.id);

//               if (submitHandler) {
//                 await submitHandler(values);
//               }
//             }}
//           >
//             Submit
//           </button>
//         )}
//       </form>

//       <div>
//         <h3>Form State</h3>

//         <pre>{JSON.stringify(values, null, 2)}</pre>
//       </div>
//     </>
//   );
// }

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

import { useEffect } from "react";

import type { FormSchema } from "../types/form-schema";

import { useForm } from "../hooks/use-form";

import { validateForm } from "../services/form-validation-service";

import { FieldRenderer } from "./fields/field-renderer";

import { getSubmitHandler } from "../services/form-submit-registry";

import { isFieldVisible } from "../services/form-visibility-service";

import { evaluateRules } from "../services/form-rule-engine";

import { getSetValueActions } from "../services/form-actions-service";

interface Props {
  schema: FormSchema;
}

export function FormRenderer({ schema }: Props) {
  const { values, errors, setErrors, updateValue } = useForm();

  const activeRules = evaluateRules(schema.rules ?? [], values);

  const setValueActions = getSetValueActions(activeRules);

  useEffect(() => {
    setValueActions.forEach((action) => {
      if (
        action.then.value !== undefined &&
        values[action.then.target] !== action.then.value
      ) {
        updateValue(action.then.target, action.then.value);
      }
    });
  }, [JSON.stringify(setValueActions)]);

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

  function isRuleVisible(fieldId: string) {
    const showRule = activeRules.find(
      (rule) => rule.then.action === "show" && rule.then.target === fieldId,
    );

    if (showRule) {
      return true;
    }

    const hasShowRule = (schema.rules ?? []).some(
      (rule) => rule.then.action === "show" && rule.then.target === fieldId,
    );

    return !hasShowRule;
  }

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
                .filter(
                  (field) =>
                    isFieldVisible(field, values) && isRuleVisible(field.id),
                )
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
