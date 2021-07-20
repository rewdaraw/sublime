import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import Head from "next/head";
import { NextPage } from "next";
import React from "react";
import { Header } from "../../components/organisms/Header";
import { Main } from "../../components/organisms/Main";
import { Aside } from "../../components/organisms/Aside";
import { DetailMainPanel } from "../../components/organisms/projects/DetailMainPanel";
import { BasicInfo } from "../../components/organisms/projects/detail/BasicInfo";
import { SkillInfo } from "../../components/organisms/projects/detail/SkillInfo";
import { FeatureInfo } from "../../components/organisms/projects/detail/FeatureInfo";
import { DevelopmentInfo } from "../../components/organisms/projects/detail/DevelopmentInfo";

const ProjectDetailPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>project detail page</title>
      </Head>
      <Header />
      <Main>
        <Flex mb={8}>
          <Heading size="md">プロジェクト情報</Heading>
        </Flex>
        <Box mb={4}>
          <DetailMainPanel>
            <BasicInfo />
          </DetailMainPanel>
        </Box>
        <Box mb={4}>
          <DetailMainPanel>
            <SkillInfo />
          </DetailMainPanel>
        </Box>
        <Box mb={4}>
          <DetailMainPanel>
            <FeatureInfo />
          </DetailMainPanel>
        </Box>
        <HStack mb={4} spacing={4}>
          <DetailMainPanel>
            <DevelopmentInfo />
          </DetailMainPanel>
        </HStack>
      </Main>
      <Aside title="Action">lll</Aside>
    </>
  );
};

export default ProjectDetailPage;

export function getStaticPaths() {
  // Return a list of possible value for id
  const paths = [
    { params: { slug: "a" } },
    { params: { slug: "b" } },
    { params: { slug: "c" } },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const data = {};
  return {
    props: {
      data,
    },
  };
}
