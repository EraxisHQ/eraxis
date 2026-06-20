export interface ReportFilter {
  id: string;

  label: string;

  type: "text" | "number" | "date" | "select" | "checkbox";

  required?: boolean;

  options?: {
    label: string;
    value: string;
  }[];
}
