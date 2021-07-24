import React from "react";
import { Box } from "@chakra-ui/react";

interface IMain {
  children: React.ReactNode;
}

export const WideMain: React.FC<IMain> = ({ children }) => {
  return (
    <Box
      as="main"
      w={{ base: "100vw", xl: "90%" }}
      pt={12}
      // pr={{ base: "0px", xl: "48px" }}
    >
      {children}
    </Box>
  );
};
