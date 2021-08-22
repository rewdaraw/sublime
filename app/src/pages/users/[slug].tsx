import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import Head from "next/head";
import { Header } from "../../components/organisms/Header";
import { Box, Button, Container, Flex, Heading } from "@chakra-ui/react";
import { Main } from "../../components/organisms/Main";
import { WhiteRoundedCard } from "../../components/organisms/projects/WhiteRoundedCard";
// import { NotificationInfo } from "../../components/organisms/users/detail/NotificationInfo";
import { UserInfo } from "../../components/organisms/users/detail/UserInfo";
import { RelatedProjectInfo } from "../../components/organisms/users/detail/RelatedProjectInfo";
import { apolloClient } from "../../graphql/client";
import { GetUserByIdQuery } from "../../graphql/generated/types";
import { GET_USER_BY_ID } from "../../graphql/client/queries";

type UserDetailPage = InferGetServerSidePropsType<typeof getServerSideProps>;

const UserDetailPage: NextPage<UserDetailPage> = ({ user }) => {
  console.log("UserDetailPage rendered!");
  console.log({user});
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
              {/* <Box mb={12}>
                <Heading as="h3" size="sm" mb={4}>
                  お知らせ
                </Heading>
                <WhiteRoundedCard>
                  <NotificationInfo />
                </WhiteRoundedCard>
              </Box> */}
              <Box mb={12}>
                <Heading as="h3" size="sm" mb={4}>
                  ユーザー情報
                </Heading>
                <WhiteRoundedCard>
                  <UserInfo
                    imageUrl={user.image_url}
                    type={user.type}
                    name={user.user_name}
                    email={user.email}
                    github={user.github_account_url}
                    twitter={user.twitter_account_url}
                    experience={user.experience}
                    skills={user.skills}
                    description={user.description}
                  />
                </WhiteRoundedCard>
                <Box align="right">
                  <Button size="sm" colorScheme="twitter" mt={2}>
                    編集
                  </Button>
                </Box>
              </Box>
              <Box mb={12}>
                <Heading as="h3" size="sm" mb={4}>
                  関連プロジェクト
                </Heading>
                {/* <WhiteRoundedCard> */}
                <RelatedProjectInfo
                  projectsLiked={user.projectsLiked}
                  projectsRequested={user.projectsRequested}
                />
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
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apolloQueryResult = await apolloClient.query<GetUserByIdQuery>({
    query: GET_USER_BY_ID,
    variables: { id: Number(context.query.slug) },
  });

  const user = apolloQueryResult.data.getUserById;

  return {
    props: {
      user,
    },
  };
}
