import React from "react";
import { Image, Tag, TagLabel, Wrap, WrapItem } from "@chakra-ui/react";

export const FeatureList: React.VFC = () => {
  return (
    <Wrap w="100%">
      <WrapItem>
        <Tag
          size="md"
          variant="solid"
          bg="white"
          color="gray.400"
          ps={0}
          pe={0}
        >
          <Image
            src="/assets/images/icons/Office.svg"
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
        <Tag size="md" variant="solid" bg="white" color="gray.400">
          <Image
            src="/assets/images/icons/Reward.svg"
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
        <Tag size="md" variant="solid" bg="white" color="gray.400">
          <Image
            src="/assets/images/icons/Expert.svg"
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
        <Tag size="md" variant="solid" bg="white" color="gray.400">
          <Image
            src="/assets/images/icons/Designer.svg"
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
        <Tag size="md" variant="solid" bg="white" color="gray.400">
          <Image
            src="/assets/images/icons/Engineer.svg"
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
