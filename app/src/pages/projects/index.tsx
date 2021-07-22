import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  Image,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";
import { NextPage } from "next";
import React from "react";
import { ProjectList } from "../../components/organisms/projects/list/List";
import { VerticalHeader } from "../../components/organisms/VerticalHeader";
import { Main } from "../../components/organisms/Main";
import { Aside } from "../../components/organisms/Aside";
import { ListAsidePanel } from "../../components/organisms/projects/ListAsidePanel";
import { ToolFilter } from "../../components/organisms/projects/list/ToolFilter";
import { TypeFilter } from "../../components/organisms/projects/list/TypeFilter";
import { FeatureFilter } from "../../components/organisms/projects/list/FeatureFilter";
import { Header } from "../../components/organisms/Header";

const ProjectListsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>project index page</title>
      </Head>
      <Header />
      {/* <VerticalHeader /> */}
      <Box w="100%" bg="#F7F9FC" pt="72px">
        <Container maxW="container.xl">
          <Flex>
            <Main>
              <Flex mb={8}>
                <Heading size="md">プロジェクト一覧</Heading>
                <Spacer />
                <Text>25件 / 125件中</Text>
                <Spacer />
                <Flex>
                  <IconButton
                    size="sm"
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
            <Aside title="プロジェクトを探す">
              <Box mb={4}>
                <ListAsidePanel
                  imageSrc="/assets/images/icons/Type.svg"
                  title="種別"
                  subtitle="作りたいポートフォリオ"
                >
                  <TypeFilter />
                </ListAsidePanel>
              </Box>
              <Box mb={4}>
                <ListAsidePanel
                  imageSrc="/assets/images/icons/Feature.svg"
                  title="特徴"
                  subtitle="プロジェクトの特徴など"
                >
                  <FeatureFilter />
                </ListAsidePanel>
              </Box>
              <Box mb={4}>
                <ListAsidePanel
                  imageSrc="/assets/images/icons/Skill.svg"
                  title="技術 / ツール"
                  subtitle="経験を積みたい技術やツール"
                >
                  <Box mt="-20px">
                    <ToolFilter />
                  </Box>
                </ListAsidePanel>
              </Box>
            </Aside>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default ProjectListsPage;
