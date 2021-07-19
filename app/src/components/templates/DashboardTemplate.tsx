import React from "react";
import Head from "next/head";
import { Header } from "../organisms/Header";
import { Main } from "../organisms/Main";
import { Flex } from "@chakra-ui/react";
import { Aside } from "../organisms/Aside";

interface IDashboardTemplate {
  children: React.ReactNode;
}

export const DashboardTemplate: React.FC<IDashboardTemplate> = ({
  children,
}) => {
  return (
    <Flex className="wrapper">
      <Header />
      <Main>{children}</Main>
      <Aside />
    </Flex>
  );
};
