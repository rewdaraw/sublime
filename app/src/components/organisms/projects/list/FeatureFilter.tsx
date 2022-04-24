import React from "react";

import { Checkbox, CheckboxGroup, VStack } from "@chakra-ui/react";

export const FeatureFilter: React.VFC = () => {
  return (
    <CheckboxGroup colorScheme="red" size="sm" defaultValue={["", ""]}>
      <VStack align="left">
        <Checkbox value="company">企業案件</Checkbox>
        <Checkbox value="reward">報酬あり</Checkbox>
        <Checkbox value="expert">実務経験者在籍</Checkbox>
        <Checkbox value="designer">デザイナー募集中</Checkbox>
        <Checkbox value="engineer">エンジニア募集中</Checkbox>
      </VStack>
    </CheckboxGroup>
  );
};
