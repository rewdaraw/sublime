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
import { InferGetServerSidePropsType, NextPage } from "next";
import React from "react";
import { ProjectList } from "../../components/organisms/projects/list/List";
import { Main } from "../../components/organisms/Main";
import { Aside } from "../../components/organisms/Aside";
import { ListAsidePanel } from "../../components/organisms/projects/ListAsidePanel";
import { ToolFilter } from "../../components/organisms/projects/list/ToolFilter";
import { TypeFilter } from "../../components/organisms/projects/list/TypeFilter";
import { FeatureFilter } from "../../components/organisms/projects/list/FeatureFilter";
import { Header } from "../../components/organisms/Header";
import { apolloClient } from "../../graphql/client";
import { GET_ALL_PROJECTS } from "../../graphql/client/queries";
import { GetAllProjectsQuery } from "../../graphql/generated/types";

type ProjectListsPageType = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const ProjectListsPage: NextPage<ProjectListsPageType> = ({ projects }) => {
  console.log("ProjectListsPage rendered!");

  return (
    <>
      <Head>
        <title>project index page</title>
      </Head>
      <Header />
      <Box w="100%" minH="100vh" bg="#F7F9FC" pt="72px">
        <Container maxW="1120px">
          <Flex>
            <Main>
              <Flex mb={6}>
                <Heading size="md">プロジェクト一覧</Heading>
                <Spacer />
                <Text>25件 / 125件中</Text>
                <Spacer />
                {/* 広げるボタン */}
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
              {projects &&
                projects.map((project) => (
                  <Box key={project.id} mb={2}>
                    <ProjectList project={project} />
                  </Box>
                ))}
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps() {
  const apolloQueryResult = await apolloClient.query<GetAllProjectsQuery>({
    query: GET_ALL_PROJECTS,
  });

  const projects = apolloQueryResult.data.getAllProjects;

  // make manyToMany relation data objects shallow for handle
  // after all I can't this for type error...

  // const projects = apolloQueryResult.data.getAllProjects.map((project) => {
  //   return {
  //     ...project,
  //     projectFeatures: project.projectFeatures.map(
  //       (projectFeature) => projectFeature.projectFeature
  //     ),
  //     projectStatuses: project.projectStatuses.map(
  //       (projectStatus) => projectStatus.progressStatus
  //     ),
  //     skills: project.skills.map((skill) => skill.skill),
  //     usersAsked: project.usersAsked.map((user) => user.user),
  //     usersLiked: project.usersAsked.map((user) => user.user),
  //     usersRequested: project.usersAsked.map((user) => user.user),
  //   };
  // });

  return {
    props: {
      projects,
    },
  };
}
