import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
  useEditableControls,
  Editable,
  EditableInput,
  EditablePreview,
  FormControl,
  Textarea,
  FormLabel,
  Code,
} from "@chakra-ui/react";

import Head from "next/head";
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React from "react";
import { Header } from "../../../components/organisms/Header";
import { Main } from "../../../components/organisms/Main";
import { Aside } from "../../../components/organisms/Aside";
import { WhiteRoundedCard } from "../../../components/organisms/projects/WhiteRoundedCard";
import { BasicInfo } from "../../../components/organisms/projects/detail/BasicInfo";
import { SkillInfo } from "../../../components/organisms/projects/detail/SkillInfo";
import { FeatureInfo } from "../../../components/organisms/projects/detail/FeatureInfo";
import { DevelopmentInfo } from "../../../components/organisms/projects/detail/DevelopmentInfo";
import { OwnersInfo } from "../../../components/organisms/projects/detail/OwnersInfo";
import { FaqInfo } from "../../../components/organisms/projects/detail/FaqInfo";
import { SendRequestion } from "../../../components/organisms/projects/detail/SendRequestion";
import { TitleWithButton } from "../../../components/molecules/TitleWithButton";
import { apolloClient } from "../../../graphql/client";
import { GetProjectByIdQuery } from "../../../graphql/generated/types";
import { GET_PROJECT_BY_ID } from "../../../graphql/client/queries";
import { Badge } from "@chakra-ui/react";
import { ToolFilter } from "../../../components/organisms/projects/list/ToolFilter";
import {
  Select,
  CreatableSelect,
  AsyncSelect,
  OptionBase,
  GroupBase,
} from "chakra-react-select";

type ProjectDetailPage = InferGetServerSidePropsType<typeof getServerSideProps>;
interface FlavorOrColorOption extends OptionBase {
  label: string;
  value: string;
  color?: string;
  rating?: string;
}

const ProjectDetailPage: NextPage<ProjectDetailPage> = ({ project }) => {
  console.log("[slug] page rendered!");

  const colorOptions = [
    { value: "blue", label: "Blue", color: "#0052CC" },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
  ];

  const flavorOptions = [
    { value: "vanilla", label: "Vanilla", rating: "safe" },
    { value: "chocolate", label: "Chocolate", rating: "good" },
    { value: "strawberry", label: "Strawberry", rating: "wild" },
    { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" },
  ];

  const groupedOptions = [
    {
      label: "Colours",
      options: colorOptions,
    },
    {
      label: "Flavours",
      options: flavorOptions,
    },
  ];

  return (
    <>
      <Head>
        <title>project edit page</title>
      </Head>
      <Header />
      <Box w="100%" minH="100vh" bg="#F7F9FC" pt="72px">
        <Container maxW="1120px">
          <Flex>
            <Main>
              <form>
                <Box mb={8}>
                  <Heading as="h3" size="sm" mb={4}>
                    基本情報
                  </Heading>
                  <WhiteRoundedCard>
                    <FormControl>
                      <Badge mb={2}>タイトル</Badge>
                      <Input value={project.title} />
                    </FormControl>
                    <FormControl>
                      <Badge mb={2}>種別</Badge>
                      <Input value={project.projectType.description} />
                    </FormControl>
                    <FormControl>
                      <Badge mb={2}>説明</Badge>
                      <Textarea value={project.description} />
                    </FormControl>
                  </WhiteRoundedCard>
                </Box>
                <Box mb={8}>
                  <Heading as="h3" size="sm" mb={4}>
                    使用している技術やツール
                  </Heading>
                  <WhiteRoundedCard>
                    <ToolFilter />
                  </WhiteRoundedCard>
                </Box>
                <Box mb={8}>
                  <Heading as="h3" size="sm" mb={4}>
                    特徴
                  </Heading>
                  <WhiteRoundedCard>
                    <FormControl>
                      {/* <FormLabel>
                        Select Colors and Flavours{" "}
                        <Code size="md"> (default)</Code>
                      </FormLabel> */}
                      <Select<
                        FlavorOrColorOption,
                        true,
                        GroupBase<FlavorOrColorOption>
                      >
                        isMulti
                        name="colors"
                        options={groupedOptions}
                        placeholder="Select some colors..."
                        closeMenuOnSelect={false}
                      />
                    </FormControl>
                    <FormControl>
                      <Badge mb={2}>説明</Badge>
                      <Textarea value={project.description} />
                    </FormControl>
                  </WhiteRoundedCard>
                </Box>
                <Box mb={8}>
                  <Heading as="h3" size="sm" mb={4}>
                    進捗状況
                  </Heading>
                  <WhiteRoundedCard>
                    <DevelopmentInfo
                      projectStatuses={project.projectStatuses}
                    />
                  </WhiteRoundedCard>
                </Box>
                <Box mb={8}>
                  <Heading as="h3" size="sm" mb={4}>
                    参加者
                  </Heading>
                  <WhiteRoundedCard>
                    <OwnersInfo owners={project.usersRequested} />
                  </WhiteRoundedCard>
                </Box>
                <Box mb={8}>
                  <Heading as="h3" size="sm" mb={4}>
                    質問
                  </Heading>
                  <WhiteRoundedCard>
                    <FaqInfo qas={project.usersAsked} />
                  </WhiteRoundedCard>
                </Box>
                <Box mb={8}>
                  <Heading as="h3" size="sm" mb={4}>
                    質問に回答する
                  </Heading>
                  <WhiteRoundedCard>
                    <FormControl>
                      {/* <Badge mb={2}>説明</Badge> */}
                      <Textarea />
                    </FormControl>
                  </WhiteRoundedCard>
                  <Box align="right">
                    <Button size="md" colorScheme="twitter" mt={4}>
                      保存
                    </Button>
                  </Box>
                </Box>
              </form>
            </Main>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default ProjectDetailPage;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(context: GetServerSidePropsContext) {
  console.log("context", context);
  const apolloQueryResult = await apolloClient.query<GetProjectByIdQuery>({
    query: GET_PROJECT_BY_ID,
    variables: { id: Number(context.query.slug) },
  });

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
