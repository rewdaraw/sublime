import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { SkillList } from "../../../molecules/SkillList";

export const SkillInfo = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        使用している技術やツール
      </Heading>
      <SkillList />
      <Box mt="24px !important">
        <Text fontSize="md" lineHeight="1.9em !important">
          engineer参加の方は、DockerとGitに関して操作問題ない方だと嬉しいです。
          <br />
          もし経験ない場合はご相談ください、教えますので一緒にスキルアップしていきましょう！
          <br />
          TypeScriptやReact / Nextの経験者は是非！！
          <br />
        </Text>
      </Box>
    </>
  );
};
