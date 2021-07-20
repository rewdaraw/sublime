import React from "react";
import { VStack } from "@chakra-ui/react";

export const DetailMainPanel: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <VStack
      align="left"
      rounded="xl"
      spacing={4}
      px={10}
      py={10}
      bg="white"
      // _hover={{ boxShadow: "lg" }}
    >
      {children}
    </VStack>
  );
};
