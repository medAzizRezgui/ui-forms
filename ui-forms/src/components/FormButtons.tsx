import React from "react";
import { Button, HStack } from "@chakra-ui/react";
import type { FormButtonProps } from "../types/Types";
const FormButtons: React.FC<FormButtonProps> = ({ onClose, isSubmitting }) => {
  return (
    <HStack
      bg={"white"}
      justify={"end"}
      p={"20px"}
      rounded={"0px 0px 15px 15px "}
      w={"100%"}
      position={"absolute"}
      bottom={0}
      left={0}
    >
      <Button onClick={() => onClose()}>Annuler</Button>
      <Button
        isDisabled={isSubmitting}
        type="submit"
        color={"white"}
        bg={"#29CC97"}
        my={4}
        _hover={{
          bg: "#228f6c",
        }}
      >
        Creer un candidat
      </Button>
    </HStack>
  );
};

export default FormButtons;
