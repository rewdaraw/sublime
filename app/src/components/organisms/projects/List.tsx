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
import React from "react";

export const ProjectList: React.VFC = () => {
  return (
    <Link href="/" _hover={{ style: "none" }}>
      <VStack
        rounded="xl"
        spacing={4}
        px={6}
        py={6}
        pb={5}
        bg="white"
        _hover={{ boxShadow: "lg" }}
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
                  bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
                  color="white"
                  mr={3}
                >
                  React
                </Tag>
                <Tag
                  size="md"
                  variant="solid"
                  bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
                  color="white"
                  mr={3}
                >
                  Nextjs
                </Tag>
                <Tag
                  size="md"
                  variant="solid"
                  bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
                  color="white"
                  mr={3}
                >
                  GraphQL
                </Tag>
                <Tag
                  size="md"
                  variant="solid"
                  bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
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
            <Image
              src="/assets/images/icons/FilledHeart.svg"
              w="16px"
              h="16px"
              mr={2}
              alt="お気に入り"
            />
            <Text>9</Text>
          </Flex>
        </Flex>
        {/* 下段 */}
        <Wrap w="100%">
          <Flex>
            <Image
              src="/assets/images/icons/Office.svg"
              d="inline-flex"
              w="16px"
              h="16px"
              mr={1}
              alt="企業案件"
            />
            <Text fontSize="14px" pr={3}>
              企業案件
            </Text>
          </Flex>
          <Flex>
            <Image
              src="/assets/images/icons/Expert.svg"
              d="inline-flex"
              w="16px"
              h="16px"
              mr={1}
              alt="実務経験者在籍"
            />
            <Text fontSize="14px" pr={3}>
              実務経験者在籍
            </Text>
          </Flex>
          <Flex>
            <Image
              src="/assets/images/icons/Designer.svg"
              d="inline-flex"
              w="16px"
              h="16px"
              mr={1}
              alt="デザイナー募集中"
            />
            <Text fontSize="14px" pr={3}>
              デザイナー募集中
            </Text>
          </Flex>
          <Flex>
            <Image
              src="/assets/images/icons/Engineer.svg"
              d="inline-flex"
              w="16px"
              h="16px"
              mr={1}
              alt="エンジニア募集中"
            />
            <Text fontSize="14px" pr={3}>
              エンジニア募集中
            </Text>
          </Flex>
          <Flex>
            <Image
              src="/assets/images/icons/Reward.svg"
              d="inline-flex"
              w="16px"
              h="16px"
              mr={1}
              alt="報酬あり"
            />
            <Text fontSize="14px" pr={3}>
              報酬あり
            </Text>
          </Flex>
        </Wrap>
      </VStack>
    </Link>
  );
};
