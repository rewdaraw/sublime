import React from "react";
import { Wrap, WrapItem, Tag } from "@chakra-ui/react";
import { ProjectToSkill, SkillToUser } from "../../graphql/generated/types";

interface ISkills {
  skills: ProjectToSkill[] | SkillToUser[];
}

export const SkillList: React.VFC<ISkills> = ({ skills }) => {
  console.log("SkillList component rendered!");

  return (
    <Wrap>
      {skills &&
        skills.map((skill, i) => (
          <WrapItem key={i}>
            <Tag
              size="md"
              variant="solid"
              bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
              color="white"
            >
              {skill.skill.description}
            </Tag>
          </WrapItem>
        ))}
    </Wrap>
  );
};
