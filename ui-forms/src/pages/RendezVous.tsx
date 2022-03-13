import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormDrawer from "../components/FormDrawer";
import "../styles/customStyles.module.css";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  Flex,
  Box,
  useDisclosure,
  Heading,
  Input,
} from "@chakra-ui/react";
import FormButtons from "../components/FormButtons";
import MyTextInput from "../components/MyTextInput";
const jobOptions = [
  { value: "Front End Developer", label: "Front End Developer" },
  { value: "Designer", label: "Designer" },
  { value: "UI/UX Engineer", label: "UI/UX Engineer" },
];
const emailOptions = [
  { value: "test@test.com", label: "test@test.com" },
  { value: "azizrezgui4@gmail.com", label: "azizrezgui4@gmail.com" },
  { value: "slah.2@outlook.com", label: "slah.2@outlook.com" },
];
const recOptions = [
  { value: "test@test.com", label: "test@test.com" },
  { value: "azizrezgui4@gmail.com", label: "azizrezgui4@gmail.com" },
  { value: "slah.2@outlook.com", label: "slah.2@outlook.com" },
];
const RendezVous = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  type InitValuesType = {
    selectedEmail: string;
    selectedJob: string;
    selectedDate: string;
    startHour: string;
    endHour: string;
    location: string;
    selectedRec: RecType[];
  };
  type RecType = {
    value: string;
    label: string;
  };
  const initValues: InitValuesType = {
    selectedEmail: "",
    selectedJob: "",
    selectedDate: "",
    startHour: "",
    endHour: "",
    location: "",
    selectedRec: [],
  };
  return (
    <Formik
      // The initial values of the form
      initialValues={initValues}
      //validating the form input
      validationSchema={Yup.object({
        selectedEmail: Yup.string().required("Obligatoire"),
        selectedJob: Yup.string().required("Obligatoire"),
        selectedDate: Yup.string().required("Obligatoire"),
      })}
      //Handle the form submit
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue, values, errors, touched }) => (
        <>
          {/*  Button to open the drawer*/}
          <Button onClick={() => onOpen()}>Open</Button>
          <FormDrawer isOpen={isOpen} onClose={onClose}>
            <Flex
              align="center"
              justify="center"
              py={"20px"}
              mb={"40px"}
              w={"100%"}
            >
              <Box bg="white" p={6} rounded="md" w={"90%"}>
                <Heading
                  mb={"20px"}
                  fontFamily={"Poppins"}
                  fontSize={"3xl"}
                  fontWeight={600}
                >
                  Creer un Candidat
                </Heading>
                <Form>
                  <Select
                    name={"selectedEmail"}
                    id={"selectedEmail"}
                    options={emailOptions}
                    onChange={(value) =>
                      setFieldValue("selectedEmail", value?.value)
                    }
                  />
                  {touched.selectedEmail && errors.selectedEmail ? (
                    <div>{errors.selectedEmail}</div>
                  ) : null}

                  <Select
                    name={"selectedJob"}
                    id={"selectedJob"}
                    options={jobOptions}
                    onChange={(value) =>
                      setFieldValue("selectedJob", value?.value)
                    }
                  />
                  {touched.selectedJob && errors.selectedJob ? (
                    <div>{errors.selectedJob}</div>
                  ) : null}

                  <Input
                    type={"date"}
                    onChange={(value) => {
                      setFieldValue("selectedDate", value.target.value);
                    }}
                  />
                  <Input
                    type={"time"}
                    onChange={(value) => {
                      setFieldValue("startHour", value.target.value);
                    }}
                  />
                  <Input
                    type={"time"}
                    onChange={(value) => {
                      setFieldValue("endHour", value.target.value);
                    }}
                  />
                  <MyTextInput
                    label=""
                    name="location"
                    type="text"
                    placeholder={"Ajouter un lieu de l'entretient  "}
                  />
                  <Select
                    isMulti
                    name={"selectedRec"}
                    id={"selectedRec"}
                    options={recOptions}
                    onChange={(value) => setFieldValue("selectedRec", value)}
                  />
                  {values.selectedRec.map((item) => (
                    <p key={item.label}>{item.value}</p>
                  ))}
                  <FormButtons onClose={onClose} isSubmitting={isSubmitting} />
                </Form>
              </Box>
            </Flex>
          </FormDrawer>
        </>
      )}
    </Formik>
  );
};
export default RendezVous;
