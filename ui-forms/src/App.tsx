// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, useDisclosure } from "@chakra-ui/react";
import FormDrawer from "./components/FormDrawer";
const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>Open Modal</Button>
      <FormDrawer onClose={onClose} isOpen={isOpen}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = { email: "" };
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </FormDrawer>
    </div>
  );
};
export default App;
