import React from "react";
import { Wrap, WrapItem, Tag } from "@chakra-ui/react";

export const SkillList = () => {
  return (
    <Wrap>
      <WrapItem>
        <Tag
          size="md"
          variant="solid"
          bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
          color="white"
        >
          React
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag
          size="md"
          variant="solid"
          bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
          color="white"
        >
          Nextjs
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag
          size="md"
          variant="solid"
          bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
          color="white"
        >
          GraphQL
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag
          size="md"
          variant="solid"
          bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
          color="white"
        >
          TypeScript
        </Tag>
      </WrapItem>
    </Wrap>
  );
};
