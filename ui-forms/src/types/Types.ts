import { FieldConfig } from "formik/dist/Field";
export type FormDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
export type TextInput = {
  label: string;
  placeholder: string;
} & FieldConfig<{}>;
export type FormButtonProps = {
  onClose: () => void;
  isSubmitting: boolean;
};
