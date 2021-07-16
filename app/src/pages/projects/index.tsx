import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { DashboardTemplate } from "../../components/templates/DashboardTemplate";

export const ProjectLists: NextPage = () => {
  return (
    <DashboardTemplate title="project list page">
      <Flex p={12}>
        <Heading size="md">検索結果</Heading>
        <Spacer />

        <Text>25件 / 125件中</Text>
        <Spacer />
      </Flex>
    </DashboardTemplate>
  );
};

export default ProjectLists;
