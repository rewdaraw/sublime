import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { ProjectList } from "../../components/organisms/projects/List";
import { DashboardTemplate } from "../../components/templates/DashboardTemplate";

export const ProjectListsPage: NextPage = () => {
  return (
    <DashboardTemplate title="project list page">
      <Flex mb={8}>
        <Heading size="md">検索結果</Heading>
        <Spacer />
        <Text>25件 / 125件中</Text>
        <Spacer />
      </Flex>
      <ProjectList />
    </DashboardTemplate>
  );
};

export default ProjectListsPage;
