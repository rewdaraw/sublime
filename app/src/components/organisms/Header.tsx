import React from "react";
import {
  HStack,
  Flex,
  Heading,
  Image,
  Spacer,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

export const Header: React.VFC = () => {
  return (
    <Flex
      alignItems="center"
      px={6}
      py={3}
      w="100%"
      h="72px"
      bgColor="white"
      boxShadow="base"
      pos="fixed"
    >
      <Heading as="h1">
        <Image src="/assets/images/logo.svg" alt="Co." />
      </Heading>
      <Spacer />
      <HStack>
        <Avatar
          as="button"
          pos="relative"
          aria-label="notifications"
          icon={<BellIcon w={7} h={7} />}
          mr={2}
          color="gray.300"
          bgColor="white"
        >
          <AvatarBadge
            pos="absolute"
            top={0}
            left={6}
            boxSize="1em"
            bg="coral"
          />
        </Avatar>

        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
          {/* <AvatarBadge boxSize="1em" bg="coral" /> */}
        </Avatar>
      </HStack>
    </Flex>
  );
};
