import React from "react";
import { Image, Box, Flex, Text } from "@chakra-ui/react";

export const PeopleInfoLabel: React.VFC = () => {
  return (
    <Flex>
      <Image
        src="/assets/images/avatar.jpg"
        boxSize={12}
        alt="engineer"
        rounded="full"
        mr={4}
      />
      <Box textAlign="center">
        <Text fontSize="xs">designer</Text>
        <Text>近藤シャロン</Text>
      </Box>
    </Flex>
  );
};
