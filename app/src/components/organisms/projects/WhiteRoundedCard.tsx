import React from "react";
import { VStack } from "@chakra-ui/react";

export const WhiteRoundedCard: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <VStack
      align="left"
      rounded={{ base: "8px", sm: "16px" }}
      spacing={4}
      p={{ base: "16px", sm: "32px" }}
      bg="white"
    >
      {children}
    </VStack>
  );
};
