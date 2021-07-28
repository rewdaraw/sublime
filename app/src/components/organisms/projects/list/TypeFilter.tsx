import React from "react";
import { Checkbox, CheckboxGroup, VStack } from "@chakra-ui/react";

export const TypeFilter: React.VFC = () => {
  return (
    <CheckboxGroup colorScheme="red" size="sm" defaultValue={["", ""]}>
      <VStack align="left">
        <Checkbox value="sns">SNS</Checkbox>
        <Checkbox value="ec">EC</Checkbox>
        <Checkbox value="homepage">ホームページ</Checkbox>
        <Checkbox value="blog">ブログサイト</Checkbox>
        <Checkbox value="partial">一部機能のみ</Checkbox>
        <Checkbox value="other">その他</Checkbox>
      </VStack>
    </CheckboxGroup>
  );
};
