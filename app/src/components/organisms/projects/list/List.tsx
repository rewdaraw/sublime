import React from "react";

import { Flex, Image, Link, Spacer, Text, Wrap, WrapItem } from "@chakra-ui/react";

import { Project } from "../../../../graphql/generated/types";
import { FeatureList } from "../../../molecules/FeatureList";
import { SkillList } from "../../../molecules/SkillList";
import { WhiteRoundedList } from "../WhiteRoundedList";

interface IProject {
  project: Project;
}

export const ProjectList: React.VFC<IProject> = ({ project }) => {
  console.log("ProjectList component rendered!");

  return (
    <Link href={`/projects/${project.id}`} _hover={{ style: "none" }}>
      <WhiteRoundedList>
        {/* 上段 */}
        <Flex w="100%" align="center">
          <Wrap align="center">
            <WrapItem>
              {/* 画像とプロジェクト名 */}
              <Flex align="center">
                <Image
                  src={project.usersRequested[0]?.user?.image_url}
                  d="inline-block"
                  w="50px"
                  h="50px"
                  mr={{ base: "16px", sm: "32px" }}
                  borderRadius={8}
                  alt=""
                />
                <Text
                  fontWeight="bold"
                  w={{ base: "190px", sm: "70%" }}
                  mr={{ base: "16px", sm: "32px" }}
                  isTruncated
                >
                  {project.title}
                </Text>
              </Flex>
            </WrapItem>
          </Wrap>
          <Spacer />
          {/* 特徴 */}
          <Flex align="center">
            <Image
              src="/assets/images/icons/FilledHeart.svg"
              w="16px"
              h="16px"
              mr={2}
              alt="お気に入り"
            />
            <Text>{project.usersLiked.length}</Text>
          </Flex>
        </Flex>
        {/* 中段 */}
        <Wrap align="center">
          {/* スキル */}
          <WrapItem>
            <SkillList skills={project.skills} />
          </WrapItem>
        </Wrap>
        {/* 下段 */}
        <FeatureList features={project.projectFeatures} />
      </WhiteRoundedList>
    </Link>
  );
};
