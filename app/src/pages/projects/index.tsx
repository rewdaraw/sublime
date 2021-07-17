import { Box, Flex, Heading, IconButton, Spacer, Text, Image } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import { ProjectList } from "../../components/organisms/projects/List";
import { DashboardTemplate } from "../../components/templates/DashboardTemplate";

export const ProjectListsPage: NextPage = () => {
  return (
    <DashboardTemplate title="project list page">
      <Flex mb={8}>
        <Heading size="md">結果一覧</Heading>
        <Spacer />
        <Text>25件 / 125件中</Text>
        <Spacer />
        <Flex>
          <IconButton
            as="button"
            bg="white"
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
      <Box mb={2}>
        <ProjectList />
      </Box>
      <Box mb={2}>
        <ProjectList />
      </Box>
      <Box mb={2}>
        <ProjectList />
      </Box>
      <Box mb={2}>
        <ProjectList />
      </Box>
      <Box mb={2}>
        <ProjectList />
      </Box>
    </DashboardTemplate>
  );
};

export default ProjectListsPage;
