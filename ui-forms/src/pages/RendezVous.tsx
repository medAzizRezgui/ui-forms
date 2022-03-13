import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormDrawer from "../components/FormDrawer";
import customStyles from "../styles/customStyles.module.css";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import {
  AiOutlineClockCircle,
  AiOutlineTeam,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  Button,
  Flex,
  Box,
  useDisclosure,
  Heading,
  Input,
  HStack,
  Text,
  Icon,
  Textarea,
  VStack,
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
  const initValues: InitValuesType = {
    titre: "",
    selectedEmail: "",
    selectedJob: "",
    selectedDate: "",
    startHour: "",
    endHour: "",
    location: "",
    selectedRec: [],
    message: "",
  };
  return (
    <Formik
      // The initial values of the form
      initialValues={initValues}
      //validating the form input
      validationSchema={Yup.object({
        titre: Yup.string().required("Obligatoire"),
      })}
      //Handle the form submit
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
        isSubmitting,
        setFieldValue,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
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
              <Box bg="white" p={6} rounded="md" w={"95%"}>
                <Heading
                  mb={"20px"}
                  fontFamily={"Poppins"}
                  fontSize={"3xl"}
                  fontWeight={600}
                >
                  Planifier un Rendez-vous
                </Heading>
                <Form>
                  <Input
                    border={0}
                    _focus={{
                      outline: "none",
                    }}
                    _placeholder={{
                      color: "blue",
                    }}
                    borderBottom={"2px solid"}
                    rounded={0}
                    autoComplete={""}
                    onBlur={handleBlur}
                    placeholder={"Titre de Rendez-vous"}
                    name={"titre"}
                    onChange={(e) => setFieldValue("titre", e.target.value)}
                  />
                  {touched.titre && errors.titre ? (
                    <Text color={"red"}>{errors.titre}</Text>
                  ) : null}
                  <HStack w={"100%"} spacing={"20px"} my={"20px"}>
                    <VStack w={"100%"} align={"start"}>
                      <Text>Candidat</Text>
                      <Select
                        className={customStyles.selectBody}
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
                    </VStack>

                    <VStack w={"100%"} align={"start"}>
                      <Text>Offre D'emploi</Text>
                      <Select
                        className={customStyles.selectBody}
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
                    </VStack>
                  </HStack>
                  <HStack
                    spacing={0}
                    w={"100%"}
                    justify={"space-between"}
                    my={"20px"}
                  >
                    <HStack>
                      <Icon as={AiOutlineClockCircle} boxSize={"26px"} />
                      <Input
                        w={"80%"}
                        type={"date"}
                        onChange={(value) => {
                          setFieldValue("selectedDate", value.target.value);
                        }}
                      />
                    </HStack>

                    <HStack>
                      <Input
                        type={"time"}
                        onChange={(value) => {
                          setFieldValue("startHour", value.target.value);
                        }}
                      />
                      <Text>-</Text>
                      <Input
                        type={"time"}
                        onChange={(value) => {
                          setFieldValue("endHour", value.target.value);
                        }}
                      />
                    </HStack>
                  </HStack>
                  <HStack spacing={"4px"} my={"20px"}>
                    <Icon as={MdOutlineLocationOn} boxSize={"26px"} />

                    <MyTextInput
                      label=""
                      name="location"
                      type="text"
                      placeholder={"Ajouter un lieu de l'entretient  "}
                    />
                  </HStack>
                  <HStack align={"start"} my={"20px"}>
                    <Icon as={AiOutlineMail} boxSize={"26px"} />
                    <Textarea
                      onChange={(e) => setFieldValue("message", e.target.value)}
                    />
                  </HStack>
                  <HStack w={"100%"}>
                    <Icon as={AiOutlineTeam} boxSize={"26px"} />

                    <Select
                      className={customStyles.selectBody}
                      isMulti
                      placeholder={"Ajouter Recruters"}
                      name={"selectedRec"}
                      id={"selectedRec"}
                      options={recOptions}
                      onChange={(value) => setFieldValue("selectedRec", value)}
                    />
                  </HStack>
                  {values.selectedRec.map((item) => (
                    <HStack key={item.label} my={"10px"}>
                      <Icon as={AiOutlineUser} boxSize={"22px"} />
                      <VStack align={"start"} spacing={0}>
                        <Text key={item.label}>{item.value}</Text>
                        <Text fontSize={"12px"}>Collaborateur</Text>
                      </VStack>
                    </HStack>
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
