import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import { Main } from "../../components/organisms/Main";
import { Aside } from "../../components/organisms/Aside";
import { WhiteRoundedCard } from "../../components/organisms/projects/WhiteRoundedCard";
import { BasicInfo } from "../../components/organisms/projects/detail/BasicInfo";
import { SkillInfo } from "../../components/organisms/projects/detail/SkillInfo";
import { FeatureInfo } from "../../components/organisms/projects/detail/FeatureInfo";
import { DevelopmentInfo } from "../../components/organisms/projects/detail/DevelopmentInfo";
import { OwnersInfo } from "../../components/organisms/projects/detail/OwnersInfo";
import { FaqInfo } from "../../components/organisms/projects/detail/FaqInfo";
import { SendRequestion } from "../../components/organisms/projects/detail/SendRequestion";
import { TitleWithButton } from "../../components/molecules/TitleWithButton";
import { Header } from "../../components/organisms/Header";
import { apolloClient } from "../../graphql/client";
import { GetProjectByIdQuery } from "../../graphql/generated/types";
import { GET_PROJECT_BY_ID } from "../../graphql/client/queries";

type ProjectDetailPage = InferGetServerSidePropsType<typeof getServerSideProps>;

const ProjectDetailPage: NextPage<ProjectDetailPage> = ({ project }) => {
  console.log("[slug] page rendered!");
  return (
    <>
      <Head>
        <title>project detail page</title>
      </Head>
      <Header />
      <Box w="100%" minH="100vh" bg="#F7F9FC" pt="72px">
        <Container maxW="1120px">
          <Flex>
            <Main>
              <Heading size="md" mb={6}>
                プロジェクト情報
              </Heading>
              <Box mb={4}>
                <WhiteRoundedCard>
                  <BasicInfo
                    title={project.title}
                    projectType={project.projectType.description}
                    description={project.description}
                  />
                </WhiteRoundedCard>
              </Box>
              <Box mb={4}>
                <WhiteRoundedCard>
                  <SkillInfo
                    skills={project.skills}
                    skillDescription={project.skillDescription}
                  />
                </WhiteRoundedCard>
              </Box>
              <Box mb={4}>
                <WhiteRoundedCard>
                  <FeatureInfo
                    features={project.projectFeatures}
                    featureDescription={project.featureDescription}
                  />
                </WhiteRoundedCard>
              </Box>
              <Box mb={4}>
                <WhiteRoundedCard>
                  <DevelopmentInfo projectStatuses={project.projectStatuses} />
                </WhiteRoundedCard>
              </Box>
              <Box mb={4}>
                <WhiteRoundedCard>
                  <OwnersInfo owners={project.usersRequested} />
                </WhiteRoundedCard>
              </Box>
              <Box mb={4}>
                <WhiteRoundedCard>
                  <FaqInfo qas={project.usersAsked} />
                </WhiteRoundedCard>
              </Box>
            </Main>
            <Aside title="Action">
              <Box mb={2}>
                <TitleWithButton
                  title="お気に入りに登録する"
                  iconName="WhiteOutlinedHeart"
                />
              </Box>
              <Text mb={4} fontSize="sm">
                現在
                <Box
                  as="span"
                  color="red"
                  fontSize="2xl"
                  fontWeight="bold"
                  px={2}
                >
                  9
                </Box>
                人がお気に入りに登録しています
              </Text>
              <Text fontSize="sm" mb={16}>
                オーナーは、プロジェクトをお気に入り登録した人に
                参加オファーを送ることができます。
                お気に入りに登録すると参加オファーが届く可能性 が発生します。
              </Text>

              <Box mb={16}>
                <SendRequestion placeholder="何名くらいで開発を行う予定でしょうか？">
                  <TitleWithButton
                    title="プロジェクトについて質問する"
                    iconName="Send"
                  />
                </SendRequestion>
              </Box>

              <Box mb={8}>
                <SendRequestion
                  placeholder="(例)はじめまして、xxxです。こちらのプロジェクトに参加したいです。
        よろしくお願いします。"
                >
                  <TitleWithButton
                    title="参加リクエストを送る"
                    iconName="Send"
                  />
                </SendRequestion>
              </Box>
            </Aside>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default ProjectDetailPage;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloQueryResult = await apolloClient.query<GetProjectByIdQuery>({
    query: GET_PROJECT_BY_ID,
    variables: { id: Number(context.query.slug) },
  });
  // const apolloQueryResult = await apolloClient.query({
  //   query: GET_PROJECT_BY_ID,
  //   variables: { id: Number(context.query.slug) },
  // });

  const project = apolloQueryResult.data.getProjectById;

  return {
    props: {
      project,
    },
  };
}

// export function getStaticPaths() {
//   // Return a list of possible value for id
//   const paths = [
//     { params: { slug: "a" } },
//     { params: { slug: "b" } },
//     { params: { slug: "c" } },
//   ];
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   // Fetch necessary data for the blog post using params.id
//   const data = {};
//   return {
//     props: {
//       data,
//     },
//   };
// }
