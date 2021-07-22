import React from "react";
import { Box } from "@chakra-ui/react";

interface IMain {
  children: React.ReactNode;
}

export const Main: React.FC<IMain> = ({ children }) => {
  return (
    <Box
      as="main"
      bg="#F7F9FC"
      rounded={{ base: "0px", sm: "48px" }}
      w={{ base: "100vw", xl: "70vw" }}
      pt={{ base: "8px", sm: "48px" }}
      pr={{ base: "8px", sm: "48px" }}
    >
      {children}
    </Box>
  );
};
