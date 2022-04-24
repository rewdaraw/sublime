import React from "react";

import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { User } from "../../graphql/generated/types";

interface IPeopleInfoLabel {
  people: User;
}

export const PeopleInfoLabel: React.VFC<IPeopleInfoLabel> = ({ people }) => {
  console.log("PeopleInfoLabel component rendered!");
  return (
    <Flex>
      <Image
        src={people.image_url}
        boxSize={12}
        alt={people.type}
        rounded="full"
        mr={4}
      />
      <Box textAlign="center">
        <Text fontSize="xs">{people.type}</Text>
        <Text>{people?.user_name}</Text>
      </Box>
    </Flex>
  );
};
