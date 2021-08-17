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
  console.log(skillDescription);
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        使用している技術やツール
      </Heading>
      <SkillList skills={skills} />
      <Box mt="24px !important">
        {/* TODO: projectsテーブルにskill_descriptionカラムを持たせる */}
        <Text fontSize="md" lineHeight="1.9em !important">
          {skillDescription}
          <br />
        </Text>
      </Box>
    </>
  );
};
