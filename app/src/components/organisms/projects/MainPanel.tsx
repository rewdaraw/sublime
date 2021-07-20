import React from "react";
import { VStack } from "@chakra-ui/react";

export const MainPanel: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <VStack
      align="left"
      rounded="xl"
      spacing={4}
      px={6}
      py={6}
      pb={5}
      bg="white"
      _hover={{ boxShadow: "lg" }}
    >
      {children}
    </VStack>
  );
};
