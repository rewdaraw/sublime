import React from "react";
import Link from "next/link";
import {
  HStack,
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Spacer,
  Avatar,
  Container,
  Text,
} from "@chakra-ui/react";

export const Header: React.VFC = () => {
  return (
    <Box
      px={6}
      py={2}
      w="100%"
      bgColor="white"
      // boxShadow="base"
      pos="fixed"
      zIndex={999}
    >
      <Container maxW="1120px" px={{ base: "0px", sm: "16px" }}>
        <Flex align="center">
          {/* logo */}
          <Heading as="h1">
            <Link href="/" passHref={true}>
              <Image src="/assets/images/logo.svg" alt="Co." />
            </Link>
          </Heading>
          <Spacer />
          {/* menu - icons */}
          <HStack spacing={2}>
            {/* プロジェクト */}
            <Link href="/projects" passHref={true}>
              <Box pos="relative">
                <IconButton
                  bg="transparent"
                  aria-label="Search People"
                  _before={{
                    pos: "absolute",
                    left: "8px",
                    top: "40px",
                    content: '""',
                    w: "24px",
                    h: "2px",
                    borderRadius: "1px",
                    verticalAlign: "middle",
                    bg: "#1da1f2",
                  }}
                  icon={
                    <Image
                      src="/assets/images/icons/Project.svg"
                      width="24px"
                      height="24px"
                      alt="共同作業者を探す"
                    />
                  }
                />
                {/* <Text
                pos="absolute"
                top="34px"
                fontSize="11px"
                mt="0px !important"
              >
                Project
              </Text> */}
              </Box>
            </Link>

            {/* パートナー */}
            <Link href="/users/1" passHref={true}>
              <Box pos="relative">
                <IconButton
                  bg="transparent"
                  aria-label="Search People"
                  icon={
                    <Image
                      src="/assets/images/icons/People.svg"
                      width="24px"
                      height="24px"
                      alt="共同作業者を探す"
                    />
                  }
                />
                {/* <Text
                pos="absolute"
                top="34px"
                left="9px"
                fontSize="11px"
                mt="0px !important"
              >
                User
              </Text> */}
              </Box>
            </Link>

            {/* お知らせ */}
            {/* <Box pos="relative">
              <IconButton
                bg="transparent"
                aria-label="Search People"
                icon={
                  <Image
                    src="/assets/images/icons/BadgedBell.svg"
                    width="24px"
                    height="24px"
                    alt="共同作業者を探す"
                  />
                }
              />
              <Text
                pos="absolute"
                top="35px"
                fontSize="10px"
                mt="0px !important"
              >
                お知らせ
              </Text>
            </Box> */}

            {/* ユーザー */}
            <Avatar
              as="button"
              name=""
              src="https://bit.ly/ryan-florence"
              w="40px"
              h="40px"
              _hover={{ opacity: "0.7" }}
            ></Avatar>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
