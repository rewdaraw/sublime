import React from "react";
import { Image, Tag, TagLabel, Wrap, WrapItem } from "@chakra-ui/react";

export const OutlinedFeatureList: React.VFC = () => {
  return (
    <Wrap w="100%">
      <WrapItem>
        <Tag size="md" variant="outline" colorScheme="red">
          <Image
            src="/assets/images/icons/OfficeColored.svg"
            d="inline-flex"
            w="14px"
            h="14px"
            mr={1}
            alt="企業案件"
          />
          <TagLabel>企業案件</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="md" variant="outline" colorScheme="red">
          <Image
            src="/assets/images/icons/RewardColored.svg"
            d="inline-flex"
            w="14px"
            h="14px"
            mr={1}
            alt="報酬あり"
          />
          <TagLabel>報酬あり</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="md" variant="outline" colorScheme="red">
          <Image
            src="/assets/images/icons/ExpertColored.svg"
            d="inline-flex"
            w="14px"
            h="14px"
            mr={1}
            alt="実務経験者在籍"
          />
          <TagLabel>実務経験者在籍</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="md" variant="outline" colorScheme="red">
          <Image
            src="/assets/images/icons/DesignerColored.svg"
            d="inline-flex"
            w="14px"
            h="14px"
            mr={1}
            alt="デザイナー募集中"
          />
          <TagLabel>デザイナー募集中</TagLabel>
        </Tag>
      </WrapItem>
      <WrapItem>
        <Tag size="md" variant="outline" colorScheme="red">
          <Image
            src="/assets/images/icons/EngineerColored.svg"
            d="inline-flex"
            w="14px"
            h="14px"
            mr={1}
            alt="エンジニア募集中"
          />
          <TagLabel>エンジニア募集中</TagLabel>
        </Tag>
      </WrapItem>
    </Wrap>
  );
};
