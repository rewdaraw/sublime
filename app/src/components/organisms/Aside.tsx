import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { ProjectSearchPanel } from "./projects/Panel";

export const Aside: React.FC = () => {
  return (
    <Box
      as="aside"
      d={{ base: "none", sm: "none", md: "none", lg: "none", xl: "block" }}
      minW="25%"
      h="100vh"
      pos="fixed"
      top="0"
      right="0"
      py={12}
      px={8}
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
              "linear-gradient(0deg, rgba(72,1,131,1) 0%, rgba(128,91,213,1) 100%);",
            borderRadius: "2px",
            marginRight: "8px",
          }}
        >
          プロジェクトを探す
        </Heading>
        <Box mb={4}>
          <ProjectSearchPanel
            imageSrc="/assets/images/icons/Skill.svg"
            title="技術"
            subtitle="経験を積みたい技術"
          >
            aaa
          </ProjectSearchPanel>
        </Box>
        <Box mb={4}>
          <ProjectSearchPanel
            imageSrc="/assets/images/icons/Type.svg"
            title="種類"
            subtitle="作ってみたいアプリケーション"
          >
            bbb
          </ProjectSearchPanel>
        </Box>
        <Box mb={4}>
          <ProjectSearchPanel
            imageSrc="/assets/images/icons/Feature.svg"
            title="特徴"
            subtitle="プロジェクトの特徴"
          >
            bbb
          </ProjectSearchPanel>
        </Box>
      </Box>
    </Box>
  );
};
