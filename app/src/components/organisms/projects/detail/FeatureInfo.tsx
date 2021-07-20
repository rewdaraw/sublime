import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { OutlinedFeatureList } from "../../../molecules/OutlinedFeatureList";

export const FeatureInfo = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        特徴や特典
      </Heading>
      <OutlinedFeatureList />
      <Box mt="24px !important">
        <Text fontSize="md" lineHeight="1.9em !important">
          engineer参加の方は、DockerとGitに関して操作問題ない方だと嬉しいです。
          <br />
          もし経験ない場合はご相談ください、教えますので一緒にスキルアップしていきましょう！
          <br />
          フロントエンドエンジニア / デザイナー絶賛募集中です。
          <br />
        </Text>
      </Box>
    </>
  );
};
