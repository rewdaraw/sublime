import {
  Box,
  Link,
  VStack,
  Flex,
  Spacer,
  Image,
  Text,
  Icon,
  Wrap,
} from "@chakra-ui/react";
import { Heart as EmptyHeart } from "@styled-icons/boxicons-regular/Heart";
import { Heart as FilledHeart } from "@styled-icons/boxicons-solid/Heart";
import { OfficeBuilding as Office} from "@styled-icons/heroicons-outline/OfficeBuilding";
import { PersonAdd as Expert } from "@styled-icons/evaicons-solid/PersonAdd";
import { Engineering as Engineer} from "@styled-icons/material/Engineering";
import { DesignIdeas as Designer} from "@styled-icons/fluentui-system-filled/DesignIdeas";
import React from "react";
import { Tag } from "../../atoms/Tag";

export const ProjectList: React.VFC = () => {
  return (
    <Link href="/" _hover={{ style: "none", boxShadow: "3px, 3px" }}>
      <VStack
        minW="850px"
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
            <Flex align="center">
              <Image
                src="https://bit.ly/ryan-florence"
                w="50px"
                h="50px"
                mr={8}
                borderRadius={8}
                alt=""
              />
              <Text fontWeight="bold" minW={40} mr={16}>
                人材マッチングサイト
              </Text>
              {/* タグのリピート */}
              <Tag bgColor="#660296" color="white" text="react" />
              <Tag bgColor="#660296" color="white" text="nextjs" />
              <Tag bgColor="#660296" color="white" text="graphql" />
              {/* <Tag bgColor="purple.600" color="white" text="prisma" />
              <Tag bgColor="purple.600" color="white" text="express" />
              <Tag bgColor="purple.600" color="white" text="mongodb" /> */}
            </Flex>
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
            {/* <Tag bgColor="gray.100" color="black" text="企業案件" />
            <Tag bgColor="gray.100" color="black" text="実務経験者在籍" />
            <Tag bgColor="gray.100" color="black" text="デザイナー募集中" />
            <Tag bgColor="gray.100" color="black" text="エンジニア募集中" /> */}
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
