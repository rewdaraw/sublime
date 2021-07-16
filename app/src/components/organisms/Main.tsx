import React from "react";
import { Box } from "@chakra-ui/react";

interface IMain {
  children: React.ReactNode;
}

export const Main: React.FC<IMain> = ({ children }) => {
  return (
    <Box as="main" bg="#F7F9FC" rounded={30} w="70vw" minW="960px" p={12} ml="72px">
      {children}
    </Box>
  );
};
