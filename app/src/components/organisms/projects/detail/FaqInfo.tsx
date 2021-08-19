import React from "react";
import { Heading, VStack, Box, Text, Divider } from "@chakra-ui/react";
import { PeopleInfoLabel } from "../../../molecules/PeopleInfoLabel";
import { Qa } from "../../../../graphql/generated/types";

interface IFaqInfo {
  qas: Qa[]
}

export const FaqInfo: React.VFC<IFaqInfo> = ({qas}) => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        質問と回答
      </Heading>
      <VStack spacing={8}>
        {qas &&
          qas.map((qa, i) => (
            <Box key={i} w="100%" align="">
              <Text fontSize="xs" color="red">
                2021.12.16
              </Text>
              <Text mt={2}>
                Docker及びGit初心者なんですが、大丈夫でしょうか？
              </Text>
              <Box mt={4} justifyContent="right">
                <PeopleInfoLabel people={qa.user} />
              </Box>
              <Divider mt={4} />
            </Box>
          ))}
      </VStack>
    </>
  );
};
