import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import type { FormDrawerProps } from "../types/Types";
const FormDrawer: React.FC<FormDrawerProps> = ({
  children,
  isOpen,

  onClose,
}) => {
  return (
    <>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          w={"80%"}
          mx={"auto"}
          rounded={"15px 15px 0px 0px"}
          h={"80vh"}
        >
          <DrawerCloseButton />
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FormDrawer;
