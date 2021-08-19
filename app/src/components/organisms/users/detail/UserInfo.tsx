import {
  Badge,
  Box,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SkillList } from "../../../molecules/SkillList";

export const UserInfo: React.VFC = () => {
  return (
    <Box d={{ base: "block", md: "flex" }} alignItems="center">
      <Box
        d={{ base: "inline-flex", md: "block" }}
        minW={{ base: "", md: "130px" }}
        mr={{ sm: "0px", md: "0px" }}
      >
        <Box
          d={{ base: "inline-flex", md: "block" }}
          mr={{ base: "30px", md: "0px" }}
        >
          <Image
            src="/assets/images/avatar.jpg"
            boxSize={{ base: "80px", md: "130px" }}
            rounded="full"
            alt=""
          />
        </Box>
        <Box>
          {/* typeと名前 */}
          <Box textAlign={{ base: "left", sm: "center" }}>
            <Text
              d={{ sm: "flex", md: "block" }}
              mt={{ sm: "0px", md: "16px" }}
              fontSize="xs"
            >
              engineer
            </Text>
            <Text
              d={{ sm: "flex", md: "block" }}
              maxW={{ base: "130px", sm: "300px", md: "130px" }}
              fontWeight="bold"
            >
              Nora Tsunoda
            </Text>
          </Box>
          {/* ソーシャルアイコン */}
          <HStack
            mt={3}
            spacing="10px"
            w="fit-content"
            mx={{ base: "0px", sm: "auto" }}
          >
            <Link href="/" target="_blank">
              <Image
                src="/assets/images/icons/mail.svg"
                boxSize="24px"
                alt=""
              />
            </Link>
            <Spacer d={{ base: "none", sm: "block" }} />
            <Link href="/" target="_blank">
              <Image
                src="/assets/images/icons/github.svg"
                boxSize="24px"
                alt=""
              />
            </Link>
            <Spacer d={{ base: "none", sm: "block" }} />
            <Link href="/" target="_blank">
              <Image
                src="/assets/images/icons/twitter.svg"
                boxSize="24px"
                alt=""
              />
            </Link>
          </HStack>
        </Box>
      </Box>
      {/* プログラム歴 / スキル / 自己紹介 */}
      <VStack
        align="left"
        spacing={3}
        ml={{ md: "30px" }}
        mt={{ base: "12px", md: "0px" }}
      >
        <Box d={{ base: "none", md: "block" }}>
          {/* <Text
            d={{ sm: "none", md: "block" }}
            fontSize="xs"
            color="red"
            mb={1}
          >
            プログラム歴
          </Text> */}
          <Badge>プログラム歴</Badge>
          <Text>2年くらい</Text>
        </Box>
        <Box>
          {/* <Text
            d={{ base: "none", md: "block" }}
            fontSize="xs"
            color="red"
            mb={2}
          >
            スキル
          </Text> */}
          <Badge>スキル</Badge>
          <SkillList />
        </Box>
        <Box>
          {/* <Text
            d={{ base: "none", md: "block" }}
            fontSize="xs"
            color="red"
            mb={1}
          >
            自己紹介
          </Text> */}
          <Badge>自己紹介</Badge>
          <Text>
            大学4年生。エンジニアを目指して日々勉強中。フロント周りに興味あり。
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};
