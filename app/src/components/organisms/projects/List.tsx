import {
  Box,
  Link,
  VStack,
  Flex,
  Spacer,
  Image,
  Tag,
  Text,
  Icon,
  Wrap,
} from "@chakra-ui/react";
import { Heart as EmptyHeart } from "@styled-icons/boxicons-regular/Heart";
import { Heart as FilledHeart } from "@styled-icons/boxicons-solid/Heart";
import { OfficeBuilding as Office } from "@styled-icons/heroicons-outline/OfficeBuilding";
import { PersonAdd as Expert } from "@styled-icons/evaicons-solid/PersonAdd";
import { Engineering as Engineer } from "@styled-icons/material/Engineering";
import { Adobe as Designer } from "@styled-icons/boxicons-logos/Adobe";
import React from "react";

export const ProjectList: React.VFC = () => {
  return (
    <Link href="/" _hover={{ style: "none", boxShadow: "3px, 3px" }}>
      <VStack
        // minW="850px"
        rounded="xl"
        spacing={4}
        px={6}
        py={6}
        pb={5}
        bg="white"
        // boxShadow="4px 4px 4px #ddd"
        _hover={{ boxShadow: "4px 4px 4px #ddd" }}
      >
        {/* 上段 */}
        <Flex w="100%" align="center">
          <Box>
            <Wrap align="center">
              {/* 画像とプロジェクト名 */}
              <Flex align="center">
                <Image
                  src="https://bit.ly/ryan-florence"
                  d="inline-block"
                  w="50px"
                  h="50px"
                  mr={{ base: "16px", sm: "32px" }}
                  borderRadius={8}
                  alt=""
                />
                <Text
                  fontWeight="bold"
                  mr={{ base: "16px", sm: "32px" }}
                  isTruncated
                >
                  人材マッチングサイト
                </Text>
              </Flex>
              {/* タグのリピート */}
              <Wrap>
                <Tag
                  size="md"
                  variant="solid"
                  colorScheme="purple"
                  color="white"
                  mr={3}
                >
                  React
                </Tag>
                <Tag
                  size="md"
                  variant="solid"
                  colorScheme="purple"
                  color="white"
                  mr={3}
                >
                  Nextjs
                </Tag>
                <Tag
                  size="md"
                  variant="solid"
                  colorScheme="purple"
                  color="white"
                  mr={3}
                >
                  GraphQL
                </Tag>
                <Tag
                  size="md"
                  variant="solid"
                  colorScheme="purple"
                  color="white"
                  mr={3}
                >
                  TypeScript
                </Tag>
              </Wrap>
            </Wrap>
          </Box>
          <Spacer />
          <Flex align="center">
            <Icon as={EmptyHeart} w="16px" h="17px" mr={2} />
            <Text>9</Text>
          </Flex>
        </Flex>
        {/* 下段 */}
        <Flex w="100%">
          <Wrap>
            <Text fontSize="13px" color="gray.500" pr={3}>
              <Icon
                as={Office}
                w="16px"
                h="16px"
                color="gray.400"
                mb="2px"
                mr={1}
              />
              企業案件
            </Text>
            <Text fontSize="13px" color="gray.500" pr={3}>
              <Icon
                as={Expert}
                w="16px"
                h="16px"
                color="gray.400"
                mb="2px"
                mr={1}
              />
              実務経験者在籍
            </Text>
            <Text fontSize="13px" color="gray.500" pr={3}>
              <Icon
                as={Designer}
                w="16px"
                h="16px"
                color="gray.400"
                mb="2px"
                mr={1}
              />
              デザイナー募集中
            </Text>
            <Text fontSize="13px" color="gray.500" pr={3}>
              <Icon
                as={Engineer}
                w="16px"
                h="16px"
                color="gray.400"
                mb="2px"
                mr={1}
              />
              エンジニア募集中
            </Text>
          </Wrap>
          <Spacer />
          <Text fontSize="13px" maxW="80px" color="yellow.500">
            開発進行中
          </Text>
        </Flex>
      </VStack>
    </Link>
  );
};
