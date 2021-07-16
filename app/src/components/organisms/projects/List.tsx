import { Box, Link, VStack, Flex, Spacer, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Tag } from "../../atoms/Tag";

export const ProjectList: React.VFC = () => {
  return (
    <Link href="/">
      <VStack rounded="lg" spacing={2} px={6} py={3} bg="white">
        {/* 上段 */}
        <Flex w="100%" align="center">
          <Box>
            <Flex align="center">
              <Image
                src="https://bit.ly/ryan-florence"
                w="50px"
                h="50px"
                mr={8}
                borderRadius={8}
                alt=""
              />
              <Text fontWeight="bold" mr={16}>
                プロジェクトタイトル
              </Text>
              {/* タグのリピート */}
              <Tag bgColor="purple" color="white" text="react" />
              <Tag bgColor="purple" color="white" text="php" />
            </Flex>
          </Box>
          <Spacer />
          ハートと数字
        </Flex>
        {/* 下段 */}
        <Flex w="100%">下段エリア</Flex>
      </VStack>
    </Link>
  );
};
