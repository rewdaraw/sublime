import React from "react";
import { Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { PeopleInfoLabel } from "../../../molecules/PeopleInfoLabel";

export const OwnersInfo: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        共同オーナー(参加者)
      </Heading>
      <Wrap>
        <WrapItem pr={8} pb={2}>
          <PeopleInfoLabel />
        </WrapItem>
        <WrapItem pr={8} pb={2}>
          <PeopleInfoLabel />
        </WrapItem>
      </Wrap>
    </>
  );
};
