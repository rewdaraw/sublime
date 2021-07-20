import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { OutlinedFeatureList } from "../../../molecules/OutlinedFeatureList";

export const DevelopmentInfo = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        開発状況
      </Heading>
      <OutlinedFeatureList />
      <Box mt="24px !important">
        <Text fontSize="md" lineHeight="1.9em !important">
          engineer参加の方は、DockerとGitに関して操作問題ない方だと嬉しいです。
        </Text>
      </Box>
    </>
  );
};
