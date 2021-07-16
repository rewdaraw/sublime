import { Center } from "@chakra-ui/react";
import React from "react";

interface ITag {
  bgColor: string;
  color: string;
  text: string;
}

export const Tag: React.VFC<ITag> = ({ bgColor, color, text }) => {
  return (
    <Center px={3} py={0.5} bg={bgColor} color={color} borderRadius={8} mr={2}>
      {text}
    </Center>
  );
};
