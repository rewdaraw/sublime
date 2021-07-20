import {
  Box,
  Link,
  Flex,
  Spacer,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { FeatureList } from "../../../molecules/FeatureList";
import { SkillList } from "../../../molecules/SkillList";
import { ListMainPanel } from "../ListMainPanel";

export const ProjectList: React.VFC = () => {
  return (
    <Link href="/projects/a" _hover={{ style: "none" }}>
      <ListMainPanel>
        {/* 上段 */}
        <Flex w="100%" align="center">
          <Wrap align="center">
            <WrapItem>
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
            </WrapItem>
            {/* タグ */}
            <WrapItem isTruncated>
              <SkillList />
            </WrapItem>
          </Wrap>
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
        <FeatureList />
      </ListMainPanel>
    </Link>
  );
};
