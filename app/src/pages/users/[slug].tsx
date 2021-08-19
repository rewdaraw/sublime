import { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { Header } from "../../components/organisms/Header";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { Main } from "../../components/organisms/Main";
import { WhiteRoundedCard } from "../../components/organisms/projects/WhiteRoundedCard";
import { NotificationInfo } from "../../components/organisms/users/detail/NotificationInfo";
import { UserInfo } from "../../components/organisms/users/detail/UserInfo";
import { RelatedProjectInfo } from "../../components/organisms/users/detail/RelatedProjectInfo";

const UserDetailPage: NextPage = () => {
  console.log("UserDetailPage rendered!");
  return (
    <>
      <Head>
        <title>user detail page</title>
      </Head>
      <Header />
      <Box w="100%" minH="100vh" bg="#F7F9FC" pt="72px">
        <Container maxW="1120px">
          <Flex>
            <Main>
              <Box mb={12}>
                <Heading as="h3" size="sm" mb={4}>
                  お知らせ
                </Heading>
                <WhiteRoundedCard>
                  <NotificationInfo />
                </WhiteRoundedCard>
              </Box>
              <Box mb={12}>
                <Heading as="h3" size="sm" mb={4}>
                  ユーザー情報
                </Heading>
                <WhiteRoundedCard>
                  <UserInfo />
                </WhiteRoundedCard>
                <Button size="sm" colorScheme="twitter" mt={2} float="right">編集</Button>
              </Box>
              <Box mb={12}>
                <Heading as="h3" size="sm" mb={4}>
                  関連プロジェクト
                </Heading>
                {/* <WhiteRoundedCard> */}
                  <RelatedProjectInfo />
                {/* </WhiteRoundedCard> */}
              </Box>
            </Main>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default UserDetailPage;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps() {
  const paths = [
    { params: { slug: "a" } },
    { params: { slug: "b" } },
    { params: { slug: "c" } },
  ];
  return {
    props: {
      paths,
    },
  };
}
