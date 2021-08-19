import React from "react";
import { Heading, VStack, Box, Text, Divider } from "@chakra-ui/react";
import { PeopleInfoLabel } from "../../../molecules/PeopleInfoLabel";
import { Qa } from "../../../../graphql/generated/types";
import { formatDate } from "../../../../utils";

interface IFaqInfo {
  qas: Qa[];
}

export const FaqInfo: React.VFC<IFaqInfo> = ({ qas }) => {
  return (
    <>
      <VStack spacing={8}>
        {qas &&
          qas.map((qa, i) => (
            <Box key={i} w="100%" align="">
              <Text fontSize="xs">{formatDate(qa.createdAt)}</Text>
              <Text mt={2}>{qa.description}</Text>
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
