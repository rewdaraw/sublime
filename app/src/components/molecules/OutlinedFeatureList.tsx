import React from "react";

import { Image, Tag, TagLabel, Wrap, WrapItem } from "@chakra-ui/react";

import { ProjectToProjectFeature } from "../../graphql/generated/types";

interface IOutlinedFeatureList {
  features: ProjectToProjectFeature[];
}

export const OutlinedFeatureList: React.VFC<IOutlinedFeatureList> = ({
  features,
}) => {
  console.log("OutlinedFeatureList component rendered!");
  return (
    <Wrap w="100%">
      {features &&
        features.map((feature, i) => (
          <WrapItem key={i}>
            <Tag size="md" variant="outline" colorScheme="red">
              <Image
                src={
                  feature.projectFeature.id === 1 // 企業案件
                    ? "/assets/images/icons/OfficeColored.svg"
                    : feature.projectFeature.id === 2 // 報酬あり
                    ? "/assets/images/icons/RewardColored.svg"
                    : feature.projectFeature.id === 3 // 実務経験者在籍
                    ? "/assets/images/icons/ExpertColored.svg"
                    : feature.projectFeature.id === 4 // エンジニア募集中
                    ? "/assets/images/icons/EngineerColored.svg"
                    : "/assets/images/icons/DesignerColored.svg"
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
    // <Wrap w="100%">
    //   <WrapItem>
    //     <Tag size="md" variant="outline" colorScheme="red">
    //       <Image
    //         src="/assets/images/icons/OfficeColored.svg"
    //         d="inline-flex"
    //         w="14px"
    //         h="14px"
    //         mr={1}
    //         alt="企業案件"
    //       />
    //       <TagLabel>企業案件</TagLabel>
    //     </Tag>
    //   </WrapItem>
    // </Wrap>
  );
};
