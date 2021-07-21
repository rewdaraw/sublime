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

export const FaqInfo: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        質問と回答
      </Heading>
      <Wrap align="center" mt="0px !important">
        <WrapItem>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td pl={0} minW="120px">
                  2021.10.21
                </Td>
                <Td pr={0}>草案作成</Td>
              </Tr>
              <Tr>
                <Td pl={0}>2021.11.1</Td>
                <Td pr={0}>一部デザイン完了完了完了完了完了</Td>
              </Tr>
              <Tr>
                <Td pl={0}>2021.12.24</Td>
                <Td pr={0}>開発環境構築完了</Td>
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
