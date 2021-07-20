import React from 'react'
import {Wrap, Tag} from "@chakra-ui/react"

export const SkillList = () => {
  return (
    <Wrap>
      <Tag
        size="md"
        variant="solid"
        bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
        color="white"
        mr={3}
      >
        React
      </Tag>
      <Tag
        size="md"
        variant="solid"
        bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
        color="white"
        mr={3}
      >
        Nextjs
      </Tag>
      <Tag
        size="md"
        variant="solid"
        bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
        color="white"
        mr={3}
      >
        GraphQL
      </Tag>
      <Tag
        size="md"
        variant="solid"
        bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
        color="white"
        mr={3}
      >
        TypeScript
      </Tag>
    </Wrap>
  );
}
