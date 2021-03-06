import React from "react";

import { Box, Heading } from "@chakra-ui/react";

interface IAside {
  children: React.ReactNode;
  title: string;
}

export const Aside: React.FC<IAside> = ({ children, title }) => {
  return (
    <Box as="aside" d={{ base: "none", xl: "block" }} w={{ base: "none", xl: "25%" }} py={12}>
      <Box mb={8} pos="relative">
        <Heading
          size="md"
          ml={4}
          mb={10}
          _before={{
            position: "absolute",
            top: "2px",
            left: "0px",
            content: '""',
            width: "4px",
            height: "22px",
            background: "linear-gradient(#E84B81 0%, #FF7F50 56.25%, #E3BB53 100%);",
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
