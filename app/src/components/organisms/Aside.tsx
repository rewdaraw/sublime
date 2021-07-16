import React from "react";
import { Box, Heading } from "@chakra-ui/react";

export const Aside: React.FC = () => {
  return (
    <Box as="aside" flex="1" py={12} px={8}>
      <Box mb={8}>
        <Heading size="md">プロジェクトを探す</Heading>
      </Box>
    </Box>
  );
};
