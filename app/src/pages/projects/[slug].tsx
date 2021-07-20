import { Box, Flex, Heading, Text, Textarea, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { NextPage } from "next";
import React from "react";
import { Header } from "../../components/organisms/Header";
import { Main } from "../../components/organisms/Main";
import { Aside } from "../../components/organisms/Aside";
import { MainPanel } from "../../components/organisms/projects/MainPanel";

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
        <MainPanel>
          <Heading as="h3" size="sm" mb={4}>
            基本情報
          </Heading>
          <VStack spacing={4} align="left">
            <Text fontSize="11px" color="red">
              タイトル
            </Text>
            <Text mt="0px !important">人材マッチングSNS</Text>
          </VStack>
          <VStack spacing={4} align="left">
            <Text fontSize="11px" color="red">
              アプリケーションの種類
            </Text>
            <Text mt="0px !important">SNS</Text>
          </VStack>
          <VStack spacing={4} align="left">
            <Text fontSize="11px" color="red">
              詳細
            </Text>
            <Text mt="0px !important">
              ポートフォリオに何を作ったらよいか迷う人 /
              質の高いポートフォリオを作りたい人のための人材マッチングWebサービスです。
              想定するその他のユーザーは以下になります。
              ・未経験でもシステム構築を一人称で担当できるような人材を探している企業の採用担当者
              ・何かwebサービス作りたいけどエンジニアじゃないしシステム構築にそんなにお金も支払えない人
              ・高品質なポートフォリオを作成したいが1人では大変なため、一緒に開発をしてくれる人を探している人
              ポートフォリオに何を作ったらよいか迷う人
              質の高いポートフォリオを作りたい人のための人材マッチングWebサービスです。
              想定するその他のユーザーは以下になります。
              ・未経験でもシステム構築を一人称で担当できるような人材を探している企業の採用担当者
              ・何かwebサービス作りたいけどエンジニアじゃないしシステム構築にそんなにお金も支払えない人
              ・高品質なポートフォリオを作成したいが1人では大変なため、一緒に開発をしてくれる人を探している人
            </Text>
          </VStack>
          <VStack spacing={4} align="left">
            <Text fontSize="11px" color="red">
              Gitレポジトリ
            </Text>
            <Text mt="0px !important">非公開</Text>
          </VStack>
        </MainPanel>
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
