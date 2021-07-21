import React from "react";
import { VStack } from "@chakra-ui/react";

export const DetailMainPanel: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <VStack
      align="left"
      rounded={{ base: "8px", sm: "32px" }}
      spacing={4}
      // px={10}
      // py={10}
      p={{ base: "16px", sm: "60px" }}
      bg="white"
    >
      {children}
    </VStack>
  );
};
