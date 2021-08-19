import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

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
  console.log("BasicInfo component rendered!")
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        基本情報
      </Heading>
      <VStack spacing={4} align="left">
        <Text fontSize="xs" color="red">
          プロジェクト名
        </Text>
        <Text fontSize="md" mt="0px !important">
          {title}
        </Text>
      </VStack>
      <VStack spacing={4} align="left">
        <Text fontSize="xs" color="red">
          アプリケーションの種類
        </Text>
        <Text fontSize="md" mt="0px !important">
          {projectType}
        </Text>
      </VStack>
      <VStack spacing={4} align="left">
        <Text fontSize="xs" color="red">
          プロジェクト詳細
        </Text>
        <Text fontSize="md" lineHeight="1.9em !important" mt="0px !important">
          {description}
        </Text>
      </VStack>
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
