import React from "react";
import { Box } from "@chakra-ui/react";

interface IMain {
  children: React.ReactNode;
}

export const Main: React.FC<IMain> = ({ children }) => {
  return (
    <Box
      as="main"
      w={{ base: "100vw", xl: "75%" }}
      pt={12}
      pr={{ base: "0px", xl: "48px" }}
    >
      {children}
    </Box>
  );
};
