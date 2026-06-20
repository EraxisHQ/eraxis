export interface FormValidation {
  required?: boolean;

  minLength?: number;

  maxLength?: number;

  min?: number;

  max?: number;

  pattern?: string;

  email?: boolean;
  phone?: boolean;
  gst?: boolean;
  pan?: boolean;
}
