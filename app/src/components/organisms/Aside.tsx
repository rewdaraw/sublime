import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Panel } from "./projects/Panel";
import { ToolFilter } from "./projects/ToolFilter";
import { TypeFilter } from "./projects/TypeFilter";
import { FeatureFilter } from "./projects/FeatureFilter";

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
          <Panel
            imageSrc="/assets/images/icons/Type.svg"
            title="種類"
            subtitle="作ってみたいアプリケーション"
          >
            <TypeFilter />
          </Panel>
        </Box>
        <Box mb={4}>
          <Panel
            imageSrc="/assets/images/icons/Feature.svg"
            title="特徴"
            subtitle="プロジェクトの特徴"
          >
            <FeatureFilter />
          </Panel>
        </Box>
        <Box mb={4}>
          <Panel
            imageSrc="/assets/images/icons/Skill.svg"
            title="技術 / ツール"
            subtitle="経験を積みたい技術"
          >
            <Box mt="-20px">
              <ToolFilter />
            </Box>
          </Panel>
        </Box>
      </Box>
    </Box>
  );
};
