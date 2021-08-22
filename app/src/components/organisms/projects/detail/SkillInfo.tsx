import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { SkillList } from "../../../molecules/SkillList";
import { ProjectToSkill } from "../../../../graphql/generated/types";
interface ISkillInfo {
  skills: ProjectToSkill[];
  skillDescription: string;
}

export const SkillInfo: React.VFC<ISkillInfo> = ({
  skills,
  skillDescription,
}) => {
  console.log("SkillInfo component rendered!");
  return (
    <>
      <SkillList skills={skills} />
      <Box mt="24px !important">
        <Text fontSize="md" lineHeight="1.9em !important">
          {skillDescription}
          <br />
        </Text>
      </Box>
    </>
  );
};
