import React from "react";
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
      py={4}
      w="100%"
      bgColor="white"
      boxShadow="base"
      pos="fixed"
      zIndex={999}
    >
      <Container maxW="container.xl" px={{base: "0px", sm: "16px"}}>
        <Flex align="center">
          {/* logo */}
          <Heading as="h1">
            <Image src="/assets/images/logo.svg" alt="Co." />
          </Heading>
          <Spacer />
          {/* menu - icons */}
          <HStack spacing={8}>
            {/* プロジェクト */}
            <Box pos="relative">
              <IconButton
                bg="transparent"
                aria-label="Search People"
                _before={{
                  pos: "absolute",
                  left: "16px",
                  top: "-5px",
                  content: '""',
                  w: "8px",
                  h: "8px",
                  borderRadius: "4px",
                  verticalAlign: "middle",
                  bg: "linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)",
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
              <Text
                pos="absolute"
                top="34px"
                fontSize="11px"
                mt="0px !important"
              >
                Project
              </Text>
            </Box>
            {/* パートナー */}
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
              <Text
                pos="absolute"
                top="34px"
                left="9px"
                fontSize="11px"
                mt="0px !important"
              >
                User
              </Text>
            </Box>

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
              borderRadius="6px"
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
