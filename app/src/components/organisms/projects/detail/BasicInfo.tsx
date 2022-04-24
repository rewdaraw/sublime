import React from "react";

import { Badge, Box, Text } from "@chakra-ui/react";

interface IBasicInfo {
  title: string;
  projectType: string;
  description: string;
}

export const BasicInfo: React.VFC<IBasicInfo> = ({
  title,
  projectType,
  description,
}) => {
  console.log("BasicInfo component rendered!");
  return (
    <>
      <Box>
        <Badge>タイトル</Badge>
        <Text fontSize="md" mt="0px !important">
          {title}
        </Text>
      </Box>

      <Box>
        <Badge>種別</Badge>
        <Text fontSize="md" mt="0px !important">
          {projectType}
        </Text>
      </Box>

      <Box>
        <Badge>説明</Badge>
        <Text fontSize="md" lineHeight="1.9em !important" mt="0px !important">
          {description}
        </Text>
      </Box>

      {/* TODO: projectにgithub_url持たせるかどうか考える */}
      {/* <VStack spacing={4} align="left">
        <Text fontSize="11px" color="red">
          Gitレポジトリ
        </Text>
        <Text fontSize="md" mt="0px !important">
          非公開
        </Text>
      </VStack> */}
    </>
  );
};
