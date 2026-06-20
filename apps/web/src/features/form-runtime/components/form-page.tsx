/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Dynamic Form Loader Page
 *
 * Milestone:
 * M004-19
 * =====================================
 */

import { loadForm } from "../services/form-loader";
import { FormRenderer } from "../components/form-renderer";

interface Props {
  formId: string;
}

export function FormPage({ formId }: Props) {
  const schema = loadForm(formId);

  if (!schema) {
    return <div>Form "{formId}" not found</div>;
  }

  return <FormRenderer schema={schema} />;
}
