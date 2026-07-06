import { useState } from "react";

interface Props {
  field: any;
  value?: unknown;
  onChange?: (fieldId: string, value: unknown) => void;
  disabled?: boolean;
}

export function TableField({
  field,
  value,
  onChange,
}: Props) {
  const [rows, setRows] = useState<any[]>(
    Array.isArray(value) ? value : [],
  );

  function update(nextRows: any[]) {
    setRows(nextRows);
    onChange?.(field.id, nextRows);
  }

  function addRow() {
    const row: Record<string, unknown> = {};

    field.tableColumns?.forEach((column: any) => {
      row[column.id] = "";
    });

    update([...rows, row]);
  }

  function removeRow(index: number) {
    update(rows.filter((_, i) => i !== index));
  }

  return (
    <div>
      <button
        type="button"
        onClick={addRow}
      >
        + Add Item
      </button>

      {rows.map((_, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginTop: "12px",
          }}
        >
          Row {index + 1}

          <button
            type="button"
            onClick={() => removeRow(index)}
            style={{ marginLeft: "12px" }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}