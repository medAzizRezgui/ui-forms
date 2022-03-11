import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import customStyles from "../styles/customStyles.module.css";
import { Text } from "@chakra-ui/react";
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <label className={customStyles.customFileUpload}>
        <input type="file" onChange={(e) => handleChange(e)} />

        <Text>Importer CV</Text>
        <FaUpload />
      </label>

      {!selectedFile && <p>Select a file to show details</p>}
    </div>
  );
};
export default FileUpload;
