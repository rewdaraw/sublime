import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Aside: React.FC = () => {
  return (
    <Box
      as="aside"
      d={{ base: "none", sm: "none", md: "none", lg: "none", xl: "block" }}
      minW="25%"
      h="100vh"
      pos="fixed"
      top="0"
      right="0"
      bg="blue"
      py={12}
      px={8}
      overflow="scroll"
    >
      <Box mb={8}>
        <Heading size="md">プロジェクトを探す</Heading>
        <Box h="30vh" w="90%" mx="auto" bg="gray">
          aside contents
        </Box>
        <Box h="30vh" w="90%" mx="auto" bg="cyan">
          aside contents
        </Box>
        <Box h="30vh" w="90%" mx="auto" bg="coral">
          aside contents
        </Box>
        <Box h="30vh" w="90%" mx="auto" bg="purple">
          aside contents
        </Box>
      </Box>
    </Box>
  );
};
