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
export type InitValuesType = {
  titre: string;
  selectedEmail: string;
  selectedJob: string;
  selectedDate: string;
  startHour: string;
  endHour: string;
  location: string;
  selectedRec: RecType[];
  message: string;
};
type RecType = {
  value: string;
  label: string;
};
