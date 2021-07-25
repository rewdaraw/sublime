import { Box, Container, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import { NextPage } from "next";
import React from "react";
import { WhiteRoundedCard } from "../../components/organisms/projects/WhiteRoundedCard";
import { Header } from "../../components/organisms/Header";
import { NotificationInfo } from "../../components/organisms/users/detail/NotificationInfo";
import { UserInfo } from "../../components/organisms/users/detail/UserInfo";
import { WideMain } from "../../components/organisms/WideMain";
import { RelatedProjectInfo } from "../../components/organisms/users/detail/RelatedProjectInfo";

const ProjectDetailPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>project detail page</title>
      </Head>
      <Header />
      <Box w="100%" minH="100vh" bg="#F7F9FC" pt="72px">
        <Container maxW="1120px">
          <Flex>
            <WideMain>
              <Heading size="md" mb={6}>
                お知らせ
              </Heading>
              <Box mb={12}>
                <WhiteRoundedCard>
                  <NotificationInfo />
                </WhiteRoundedCard>
              </Box>
              <Heading size="md" mb={6}>
                ユーザー情報
              </Heading>
              <Box mb={12}>
                <WhiteRoundedCard>
                  <UserInfo />
                </WhiteRoundedCard>
              </Box>
              <Heading size="md" mb={6}>
                関連プロジェクト
              </Heading>
              <Box mb={12}>
                <RelatedProjectInfo />
              </Box>
            </WideMain>
          </Flex>
        </Container>
      </Box>
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
