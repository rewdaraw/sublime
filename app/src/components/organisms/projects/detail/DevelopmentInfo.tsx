import React from "react";
import {
  Image,
  Heading,
  Wrap,
  WrapItem,
  Table,
  Tbody,
  Tr,
  Td,
  Spacer,
} from "@chakra-ui/react";

export const DevelopmentInfo: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        開発状況
      </Heading>
      <Wrap align="center" mt="0px !important">
        <WrapItem>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td pl={0} pr={{ base: "0px", sm: "24px" }} minW="110px">
                  2021.10.21
                </Td>
                <Td pr={0} pl={{ base: "0px", sm: "24px" }}>
                  草案作成
                </Td>
              </Tr>
              <Tr>
                <Td pl={0} pr={{ base: "0px", sm: "24px" }} minW="110px">
                  2021.11.1
                </Td>
                <Td pr={0} pl={{ base: "0px", sm: "24px" }}>
                  一部デザイン完了完了完了完了完了
                </Td>
              </Tr>
              <Tr>
                <Td pl={0} pr={{ base: "0px", sm: "24px" }} minW="110px">
                  2021.12.24
                </Td>
                <Td pr={0} pl={{ base: "0px", sm: "24px" }}>
                  開発環境構築完了
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </WrapItem>
        <Spacer d={{ base: "none", md: "block" }} />
        <WrapItem d="inline-block">
          <Image
            src="/assets/images/dummy-chart.png"
            boxSize="140px"
            alt="chart"
          />
        </WrapItem>
      </Wrap>
    </>
  );
};
