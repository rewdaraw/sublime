import React from "react";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  HStack,
  Heading,
  Wrap,
  VStack,
} from "@chakra-ui/react";
import { ProjectSearchPanel } from "./projects/Panel";
import { AutoCompleteInput } from "./projects/AutoCompleteInput";

export const Aside: React.FC = () => {
  return (
    <Box
      as="aside"
      d={{ base: "none", sm: "none", md: "none", lg: "none", xl: "block" }}
      w="25vw"
      h="100vh"
      pos="fixed"
      top="0"
      right="0"
      py={12}
      px={6}
      overflow="scroll"
    >
      <Box mb={8} pos="relative">
        <Heading
          size="md"
          ml={4}
          mb={8}
          _before={{
            position: "absolute",
            top: "2px",
            left: "-2px",
            content: '""',
            width: "4px",
            height: "22px",
            background:
              "linear-gradient(#E84B81 0%, #FF7F50 56.25%, #E3BB53 100%);",
            borderRadius: "2px",
            marginRight: "8px",
          }}
        >
          プロジェクトを探す
        </Heading>
        <Box mb={4}>
          <ProjectSearchPanel
            imageSrc="/assets/images/icons/Type.svg"
            title="種類"
            subtitle="作ってみたいアプリケーション"
          >
            <CheckboxGroup
              colorScheme="red"
              size="md"
              defaultValue={["sns", "ec"]}
            >
              <VStack align="left">
                <Checkbox value="sns">SNS</Checkbox>
                <Checkbox value="ec">EC</Checkbox>
                <Checkbox value="homepage">ホームページ</Checkbox>
                <Checkbox value="blog">ブログサイト</Checkbox>
                <Checkbox value="partial">一部機能のみ</Checkbox>
                <Checkbox value="other">その他</Checkbox>
              </VStack>
            </CheckboxGroup>
          </ProjectSearchPanel>
        </Box>
        <Box mb={4}>
          <ProjectSearchPanel
            imageSrc="/assets/images/icons/Feature.svg"
            title="特徴"
            subtitle="プロジェクトの特徴"
          >
            <CheckboxGroup
              colorScheme="red"
              size="md"
              defaultValue={["company", "reward"]}
            >
              <VStack align="left">
                <Checkbox value="company">企業案件</Checkbox>
                <Checkbox value="reward">報酬あり</Checkbox>
                <Checkbox value="expert">実務経験者在籍</Checkbox>
                <Checkbox value="designer">デザイナー募集中</Checkbox>
                <Checkbox value="engineer">エンジニア募集中</Checkbox>
              </VStack>
            </CheckboxGroup>
          </ProjectSearchPanel>
        </Box>
        <Box mb={4}>
          <ProjectSearchPanel
            imageSrc="/assets/images/icons/Skill.svg"
            title="技術 / ツール"
            subtitle="経験を積みたい技術"
          >
            <Box mt="-20px">
              <AutoCompleteInput />
            </Box>
          </ProjectSearchPanel>
        </Box>
      </Box>
    </Box>
  );
};
