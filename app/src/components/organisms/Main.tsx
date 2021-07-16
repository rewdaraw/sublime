import React from "react";
import { chakra } from "@chakra-ui/react";

interface IMain {
  children: React.ReactNode;
}

export const Main: React.FC<IMain> = ({ children }) => {
  return <chakra.main bg="#F7F9FC"rounded={30} w="70vw" minW="720px">{children}</chakra.main>;
};
