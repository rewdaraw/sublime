import { Box, Textarea } from "@chakra-ui/react";
import React from "react";

interface ISendRequestion {
  children: React.ReactNode;
  placeholder: string;
}

export const SendRequestion: React.FC<ISendRequestion> = ({
  children,
  placeholder,
}) => {
  return (
    <Box>
      {children}
      <Textarea
        mt={4}
        minH="150px"
        bg="white"
        focusBorderColor="none"
        border="none"
        rounded="xl"
        fontSize="sm"
        placeholder={placeholder}
      />
    </Box>
  );
};
