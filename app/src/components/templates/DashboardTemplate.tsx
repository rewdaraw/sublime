import React from "react";
import Head from "next/head";
import { Header } from "../organisms/Header";
import { Main } from "../organisms/Main";
import { Flex } from "@chakra-ui/react";
import { Aside } from "../organisms/Aside";

interface IDashboardTemplate {
  children: React.ReactNode;
  title: string;
}

export const DashboardTemplate: React.FC<IDashboardTemplate> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Flex className="wrapper">
        <Header />
        <Main>{children}</Main>
        <Aside />
      </Flex>
    </>
  );
};