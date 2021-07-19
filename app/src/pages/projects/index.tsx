import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  Image,
} from "@chakra-ui/react";
import Head from "next/head";
import { NextPage } from "next";
import React from "react";
import { ProjectList } from "../../components/organisms/projects/list/List";
import { Header } from "../../components/organisms/Header";
import { Main } from "../../components/organisms/Main";
import { Aside } from "../../components/organisms/Aside";
import { Panel } from "../../components/organisms/projects/Panel";
import { ToolFilter } from "../../components/organisms/projects/list/ToolFilter";
import { TypeFilter } from "../../components/organisms/projects/list/TypeFilter";
import { FeatureFilter } from "../../components/organisms/projects/list/FeatureFilter";

const ProjectListsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>project index page</title>
      </Head>
      <Header />
      <Main>
        <Flex mb={8}>
          <Heading size="md">結果一覧</Heading>
          <Spacer />
          <Text>25件 / 125件中</Text>
          <Spacer />
          <Flex>
            <IconButton
              as="button"
              bg="white"
              rounded="full"
              boxShadow="lg"
              aria-label="Search People"
              icon={
                <Image
                  src="/assets/images/icons/Fold.svg"
                  boxSize={4}
                  alt="折りたたむ"
                />
              }
            />
          </Flex>
        </Flex>
        <Box mb={2}>
          <ProjectList />
        </Box>
        <Box mb={2}>
          <ProjectList />
        </Box>
        <Box mb={2}>
          <ProjectList />
        </Box>
        <Box mb={2}>
          <ProjectList />
        </Box>
        <Box mb={2}>
          <ProjectList />
        </Box>
      </Main>
      <Aside>
        <Box mb={4}>
          <Panel
            imageSrc="/assets/images/icons/Type.svg"
            title="種類"
            subtitle="作ってみたいアプリケーション"
          >
            <TypeFilter />
          </Panel>
        </Box>
        <Box mb={4}>
          <Panel
            imageSrc="/assets/images/icons/Feature.svg"
            title="特徴"
            subtitle="プロジェクトの特徴"
          >
            <FeatureFilter />
          </Panel>
        </Box>
        <Box mb={4}>
          <Panel
            imageSrc="/assets/images/icons/Skill.svg"
            title="技術 / ツール"
            subtitle="経験を積みたい技術"
          >
            <Box mt="-20px">
              <ToolFilter />
            </Box>
          </Panel>
        </Box>
      </Aside>
    </>
  );
};

export default ProjectListsPage;
