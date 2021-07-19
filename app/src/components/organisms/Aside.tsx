import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface IAside {
  children: React.ReactNode;
  title: string;
}

export const Aside: React.FC<IAside> = ({ children, title }) => {
  return (
    <Box
      as="aside"
      d={{ base: "none", sm: "none", md: "none", lg: "none", xl: "block" }}
      w="25vw"
      h="100vh"
      pos="fixed"
      top="0"
      right="0"
      py={12}
      px={6}
      overflow="scroll"
    >
      <Box mb={8} pos="relative">
        <Heading
          size="md"
          ml={4}
          mb={8}
          _before={{
            position: "absolute",
            top: "2px",
            left: "-2px",
            content: '""',
            width: "4px",
            height: "22px",
            background:
              "linear-gradient(#E84B81 0%, #FF7F50 56.25%, #E3BB53 100%);",
            borderRadius: "2px",
            marginRight: "8px",
          }}
        >
          {title}
        </Heading>
        {children}
      </Box>
    </Box>
  );
};
