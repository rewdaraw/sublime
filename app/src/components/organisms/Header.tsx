import React from "react";
import Link from "next/link";
import {
  HStack,
  Box,
  Flex,
  Heading,
  IconButton,
  Button,
  Image,
  Spacer,
  Avatar,
  Container,
  Text,
} from "@chakra-ui/react";
import { SearchSwitchButton } from "../molecules/SearchSwitchButton";

export const Header: React.VFC = () => {
  return (
    <Box
      px={6}
      py={4}
      w="100%"
      bgColor="white"
      boxShadow="sm"
      pos="fixed"
      zIndex={999}
    >
      <Container maxW="1120px" px={{ base: "0px", sm: "16px" }}>
        <Flex align="center">
          {/* logo */}
          <Heading as="h1">
            <Link href="/" passHref={true}>
              <Image
                src="/assets/images/logo-temp.png"
                alt="logo-temp"
                height="40px"
              />
            </Link>
          </Heading>
          <Spacer />
          {/* SearchSwitchButton */}
          <SearchSwitchButton />
          <Spacer />
          {/* menu - icons */}
          <HStack spacing={2}>
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

            <Button bgColor="black" color="white" variant="solid">
              + 新規作成
            </Button>

            {/* ユーザー */}
            <Link href="/users/1" passHref>
              <Avatar
                as="button"
                name=""
                // border="1px solid gray"
                src="https://bit.ly/ryan-florence"
                w="40px"
                h="40px"
                _hover={{ opacity: "0.7" }}
              ></Avatar>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
