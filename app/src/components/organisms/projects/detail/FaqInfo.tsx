import React from "react";
import { Heading, VStack, Box, Text, Divider } from "@chakra-ui/react";
import { PeopleInfoLabel } from "../../../molecules/PeopleInfoLabel";

export const FaqInfo: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        質問と回答
      </Heading>
      <VStack spacing={8}>
        <Box w="100%" align="">
          <Text fontSize="xs" color="red">
            2021.12.16
          </Text>
          <Text mt={2}>Docker及びGit初心者なんですが、大丈夫でしょうか？</Text>
          <Box mt={4} justifyContent="right">
            <PeopleInfoLabel />
          </Box>
        </Box>
        <Divider />
        <Box w="100%" align="">
          <Text fontSize="xs" color="red">
            2021.12.16
          </Text>
          <Text mt={2}>
            engineer参加の方は、DockerとGitに関して操作問題ない方だと嬉しいです。
            もし経験ない場合はご相談ください、教えますので一緒にスキルアップしましょう！
            TypeScriptやReact / Nextの経験者は是非！！
          </Text>
          <Box mt={4} justifyContent="right">
            <PeopleInfoLabel />
          </Box>
        </Box>
        {/* <Divider /> */}
      </VStack>
    </>
  );
};
