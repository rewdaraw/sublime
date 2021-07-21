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
      rounded={60}
      w={{ base: "100vw", xl: "70vw" }}
      p={{ base: "8px", sm: "48px" }}
      ml={{ base: "0px", sm: "72px" }}
    >
      {children}
    </Box>
  );
};
