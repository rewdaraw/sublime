import React from "react";

import { Image, Tag, TagLabel, Wrap, WrapItem } from "@chakra-ui/react";

import { ProjectToProjectFeature } from "../../graphql/generated/types";

interface IFeatureList {
  features: ProjectToProjectFeature[];
}

export const FeatureList: React.VFC<IFeatureList> = ({ features }) => {
  console.log("FeatureList component rendered!");
  return (
    <Wrap w="100%">
      {features &&
        features.map((feature, i) => (
          <WrapItem key={i}>
            <Tag size="md" variant="solid" bg="white" color="gray.400" ps={0} pe={0}>
              <Image
                src={
                  feature.projectFeature.id === 1 // 企業案件
                    ? "/assets/images/icons/Office.svg"
                    : feature.projectFeature.id === 2 // 報酬あり
                    ? "/assets/images/icons/Reward.svg"
                    : feature.projectFeature.id === 3 // 実務経験者在籍
                    ? "/assets/images/icons/Expert.svg"
                    : feature.projectFeature.id === 4 // エンジニア募集中
                    ? "/assets/images/icons/Engineer.svg"
                    : "/assets/images/icons/Designer.svg"
                }
                d="inline-flex"
                w="14px"
                h="14px"
                mr={1}
                alt={feature.projectFeature.description}
              />
              <TagLabel>{feature.projectFeature.description}</TagLabel>
            </Tag>
          </WrapItem>
        ))}
    </Wrap>
  );
};
