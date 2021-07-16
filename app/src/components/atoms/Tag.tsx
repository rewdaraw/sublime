import { Center } from "@chakra-ui/react";
import React from "react";

interface ITag {
  bgColor: string;
  color: string;
  text: string;
}

export const Tag: React.VFC<ITag> = ({ bgColor, color, text }) => {
  return (
    <Center
      px={3}
      py={0.5}
      pb={1}
      fontSize="13px"
      bg={bgColor}
      color={color}
      borderRadius={4}
      mr={4}
    >
      {text}
    </Center>
  );
};
