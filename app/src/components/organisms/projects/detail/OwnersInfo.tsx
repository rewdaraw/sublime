import React from "react";
import { Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { PeopleInfoLabel } from "../../../molecules/PeopleInfoLabel";
import { JoinRequest } from "../../../../graphql/generated/types";

interface IOwnersInfo {
  owners: JoinRequest[];
}

export const OwnersInfo: React.VFC<IOwnersInfo> = ({ owners }) => {
  console.log("OwnersInfo component rendered!");

  const displayOwners = owners.filter((owner) => owner.status);

  return (
    <>
      <Wrap>
        {displayOwners &&
          displayOwners.map(
            (owner, i) =>
              owner.status && (
                <WrapItem key={i} pr={8} pb={2}>
                  <PeopleInfoLabel people={owner.user} />
                </WrapItem>
              )
          )}
      </Wrap>
    </>
  );
};
