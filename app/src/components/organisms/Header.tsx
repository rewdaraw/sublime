import {
  Box,
  Image,
  Flex,
  Spacer,
  VStack,
  Avatar,
  AvatarBadge,
  IconButton,
} from "@chakra-ui/react";
import React from "react";

export const Header = () => {
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
            height="45px"
            mt={10}
            alt="Cortofolio"
          />
        </Box>
        <VStack spacing={2} w="100%">
          <IconButton
            as="button"
            bg="transparent"
            aria-label="Search Projects"
            icon={
              <Image
                src="/assets/images/icons/Project.svg"
                width="24px"
                height="24px"
                alt="Cortofolio"
              />
            }
            pos="relative"
            _before={{
              pos: "absolute",
              left: "-15px",
              content: '""',
              w: "4px",
              h: "40px",
              borderRadius: "2px",
              verticalAlign: "middle",
              bg: "#805BD5",
            }}
          />
          <IconButton
            as="button"
            bg="transparent"
            aria-label="Search People"
            icon={
              <Image
                src="/assets/images/icons/People.svg"
                width="24px"
                height="24px"
                alt="Cortofolio"
              />
            }
          />
        </VStack>
      </VStack>
      <Spacer />
      <VStack spacing={4} pb={8}>
        <Avatar
          as="button"
          name=""
          bg="white"
          src="/assets/images/icons/Bell.svg"
          w="24px"
          h="24px"
        >
          <AvatarBadge bg="coral" w="0.7em" h="0.7em" borderWidth="2px" />
        </Avatar>

        <Avatar
          as="button"
          name=""
          borderRadius="6px"
          src="https://bit.ly/ryan-florence"
          w="40px"
          h="40px"
        ></Avatar>
      </VStack>
    </Flex>
  );
};
