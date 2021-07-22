import {
  Box,
  Image,
  Flex,
  Spacer,
  Text,
  VStack,
  Avatar,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

export const VerticalHeader: React.VFC = () => {
  return (
    <Flex
      as="header"
      d={{ base: "none", sm: "flex" }}
      pos="fixed"
      direction="column"
      w="70px"
      minW="70px"
      bg="white"
      minH="100vh"
    >
      <VStack spacing={40}>
        <Box as="h1">
          <Image
            src="/assets/images/logo.svg"
            width="45px"
            // height="45px"
            mt={10}
            alt="Cortofolio"
          />
        </Box>
        <VStack spacing={3} w="100%">
          <VStack spacing={1} w="100%">
            <IconButton
              bg="transparent"
              aria-label="Search Projects"
              icon={
                <Image
                  src="/assets/images/icons/Project.svg"
                  width="24px"
                  height="24px"
                  alt="プロジェクトを探す"
                />
              }
              pos="relative"
              _before={{
                pos: "absolute",
                left: "-15px",
                top: "7px",
                content: '""',
                w: "4px",
                h: "50px",
                borderRadius: "2px",
                verticalAlign: "middle",
                bg: "linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)",
              }}
            />
            <Text fontSize="11px" mt="0px !important">
              Project
            </Text>
          </VStack>
          <VStack w="100%">
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
            <Text fontSize="11px" mt="0px !important">
              Partner
            </Text>
          </VStack>
        </VStack>
      </VStack>
      <Spacer />
      <VStack spacing={4} pb={8}>
        <IconButton
          bg="transparent"
          aria-label="Search People"
          icon={
            <Image
              src="/assets/images/icons/BadgedBell.svg"
              width="24px"
              height="24px"
              alt="お知らせ"
            />
          }
        />
        <Avatar
          as="button"
          name=""
          borderRadius="6px"
          src="https://bit.ly/ryan-florence"
          w="40px"
          h="40px"
          _hover={{ opacity: "0.7" }}
        ></Avatar>
      </VStack>
    </Flex>
  );
};
