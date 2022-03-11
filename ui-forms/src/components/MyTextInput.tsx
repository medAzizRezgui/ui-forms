import React from "react";
import { useField } from "formik";
import { FormLabel, Input, Text } from "@chakra-ui/react";
import type { TextInput } from "../types/Types";
const MyTextInput: React.FC<TextInput> = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <FormLabel htmlFor={props.name}>{label}</FormLabel>
      {/*@ts-ignore*/}
      <Input
        focusBorderColor="#4285F4"
        placeholder={placeholder}
        {...field}
        {...props}
        variant="filled"
      />
      {meta.touched && meta.error ? (
        <Text color={"red"}>{meta.error}</Text>
      ) : null}
    </>
  );
};

export default MyTextInput;
