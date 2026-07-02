import { TextField } from "./text-field";
import { SelectField } from "./select-field";
import { CheckboxField } from "./checkbox-field";
import { TextareaField } from "./textarea-field";
import { TableField } from "./table-field";

interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;

  disabled?: boolean;
}

export function FieldRenderer({ field, value, onChange, disabled }: Props) {
  switch (field.type) {
    case "select":
      return (
        <SelectField
          field={field}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      );

    case "checkbox":
      return (
        <CheckboxField
          field={field}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      );

    case "textarea":
      return (
        <TextareaField
          field={field}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      );

    case "table":
  return (
    <TableField
      field={field}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );

    default:
      return (
        <TextField
          field={field}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      );
  }
}
