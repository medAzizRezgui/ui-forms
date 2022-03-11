import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import styles from "../styles/customStyles.module.css";
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
          position={"relative"}
          w={"40%"}
          mx={"auto"}
          rounded={"15px"}
          h={"90vh"}
          mb={"30px"}
        >
          <DrawerBody className={styles.DrawerBody}>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FormDrawer;
