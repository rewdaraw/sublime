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
} from "@chakra-ui/react";

export const DevelopmentInfo: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        開発状況
      </Heading>
      <Wrap mt="0px !important">
        <WrapItem>
          <Table variant="simple" w={{ base: "100%", lg: "350px" }}>
            <Tbody>
              <Tr>
                <Td w="60px" pl={0}>
                  2021.10.21
                </Td>
                <Td pr={0}>草案作成</Td>
              </Tr>
              <Tr>
                <Td pl={0}>2021.11.1</Td>
                <Td pr={0}>一部デザイン完了</Td>
              </Tr>
              <Tr>
                <Td pl={0}>2021.12.24</Td>
                <Td pr={0}>開発環境構築完了</Td>
              </Tr>
            </Tbody>
          </Table>
        </WrapItem>
        <WrapItem d="inline-block" pl={8}>
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
