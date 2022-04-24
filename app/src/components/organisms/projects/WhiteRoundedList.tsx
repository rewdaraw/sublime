import React from "react";

import { VStack } from "@chakra-ui/react";

// TODO: WhiteRoundedCard componentと統合予定
export const WhiteRoundedList: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <VStack
      align="left"
      rounded={16}
      spacing={4}
      p={6}
      pb={5}
      bg="white"
      _hover={{ boxShadow: "lg" }}
    >
      {children}
    </VStack>
  );
};
