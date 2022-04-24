import React from "react";

import { Heading, Image, Spacer, Table, Tbody, Td, Tr, Wrap, WrapItem } from "@chakra-ui/react";

import { ProjectToProgressStatus } from "../../../../graphql/generated/types";
import { formatDate } from "../../../../utils";

interface IDevelopmentInfo {
  projectStatuses: ProjectToProgressStatus[];
}

export const DevelopmentInfo: React.VFC<IDevelopmentInfo> = ({ projectStatuses }) => {
  console.log("DevelopmentInfo component rendered!");
  return (
    <>
      <Wrap align="center" mt="0px !important">
        <WrapItem>
          <Table variant="simple">
            <Tbody>
              {projectStatuses &&
                projectStatuses.map((projectStatus, i) => (
                  <Tr key={i}>
                    <Td pl={0} pr={{ base: "0px", sm: "24px" }} minW="110px">
                      {formatDate(projectStatus.createdAt)}
                    </Td>
                    <Td pr={0} pl={{ base: "0px", sm: "24px" }}>
                      {projectStatus.description}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </WrapItem>
        <Spacer d={{ base: "none", md: "block" }} />
        <WrapItem d="inline-block">
          {/* TODO: グラフを動的に描画する */}
          <Image src="/assets/images/dummy-chart.png" boxSize="140px" alt="chart" />
        </WrapItem>
      </Wrap>
    </>
  );
};
