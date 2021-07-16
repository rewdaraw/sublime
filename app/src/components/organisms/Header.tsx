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
      direction="column"
      w="70px"
      bg="white"
      minH="100vh"
      borderRight="1px solid #ccc"
    >
      <VStack spacing={40}>
        <Image
          src="/assets/images/logo.svg"
          width="60px"
          height="60px"
          pt={4}
          alt="Cortofolio"
        />
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
              pos:"absolute",
              left:"-15px",
              content: '""',
              w: "6px",
              h: "40px",
              borderRadius: "3px",
              verticalAlign: "middle",
              bg:"purple"
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
      <VStack spacing={4} pb={4}>
        <Avatar
          as="button"
          name=""
          bg="white"
          src="/assets/images/icons/Bell.svg"
          w="24px"
          h="24px"
        >
          <AvatarBadge bg="coral" w="0.7em" h="0.75em" borderWidth="2px" />
        </Avatar>

        <Avatar
          as="button"
          name=""
          borderRadius="6px"
          src="https://bit.ly/ryan-florence"
          w="40px"
          h="40px"
        >
          {/* <AvatarBadge bg="tomato" w="1em" h="1.05em" /> */}
        </Avatar>
      </VStack>
    </Flex>
  );
};
