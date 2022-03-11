import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../components/MyTextInput";
import FormDrawer from "../components/FormDrawer";
import "../styles/customStyles.module.css";

import {
  Button,
  Flex,
  Box,
  useDisclosure,
  FormControl,
  Heading,
} from "@chakra-ui/react";
import FileUpload from "../components/fileUpload";
import FormButtons from "../components/FormButtons";

const CandidateForm = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Formik
      // The initial values of the form
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        university: "",
        salaireActuelle: "",
        EntrepriseActuelle: "",
        annnesExp: "",
        specialite: "",
        diplome: "",
      }}
      // validating the form input
      validationSchema={Yup.object({
        firstName: Yup.string()

          .max(15, "Must be 15 characters or less")
          .required("Obligatoire"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Obligatoire"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Obligatoire"),
        phone: Yup.string().required("Obligatoire"),
      })}
      // Handle the form submit
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
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
                  <FormControl
                    isInvalid={!!errors.firstName && touched.firstName}
                  >
                    <FileUpload />
                    <MyTextInput
                      label="Prénom *"
                      name="firstName"
                      type="text"
                      placeholder={""}
                    />
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.lastName && touched.lastName}
                  >
                    <MyTextInput
                      label="Nom *"
                      name="lastName"
                      type="text"
                      placeholder={""}
                    />
                  </FormControl>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <MyTextInput
                      label="Email *"
                      name="email"
                      type="email"
                      placeholder={""}
                    />
                  </FormControl>
                  <FormControl isInvalid={!!errors.phone && touched.phone}>
                    <MyTextInput
                      label="Téléphone *"
                      name="phone"
                      type="text"
                      placeholder={""}
                    />
                  </FormControl>

                  <MyTextInput
                    label="Nom de l’école/university "
                    name="university"
                    type="text"
                    placeholder={"Nom de l’école/university..."}
                  />
                  <MyTextInput
                    label="Nom de diplôme"
                    name="diplome"
                    type="text"
                    placeholder={"Nom de diplôme..."}
                  />
                  <MyTextInput
                    label="Spécialité"
                    name="specialite"
                    type="text"
                    placeholder={"Spécialité..."}
                  />
                  <MyTextInput
                    label="Années d'expérience"
                    name="annnesExp"
                    type="number"
                    placeholder={"Années d'expérience..."}
                  />
                  <MyTextInput
                    label="Entreprise actuelle"
                    name="EntrepriseActuelle"
                    type="text"
                    placeholder={"Entreprise actuelle..."}
                  />
                  <MyTextInput
                    label="Salaire actuelle"
                    name="salaireActuelle"
                    type="number"
                    placeholder={"Salaire actuelle..."}
                  />
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
export default CandidateForm;
