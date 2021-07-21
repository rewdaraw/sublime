import React from "react";
import { Image, Heading, Box, Text, Wrap, WrapItem } from "@chakra-ui/react";

export const OwnersInfo: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        共同オーナー(参加者)
      </Heading>
      <Wrap>
        <WrapItem pr={8}>
          <Image
            src="/assets/images/avatar.jpg"
            boxSize={12}
            alt="engineer"
            rounded="full"
            mr={4}
          />
          <Box textAlign="center">
            <Text fontSize="sm">engineer</Text>
            <Text>近藤シャロン</Text>
          </Box>
        </WrapItem>
        <WrapItem>
          <Image
            src="/assets/images/avatar.jpg"
            boxSize={12}
            alt="engineer"
            rounded="full"
            mr={4}
          />
          <Box textAlign="center">
            <Text fontSize="sm">designer</Text>
            <Text>近藤シャロン</Text>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
};
