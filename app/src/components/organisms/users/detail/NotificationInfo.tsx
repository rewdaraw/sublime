import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const NotificationInfo: React.VFC = () => {
  return (
    <VStack align="left" spacing={6}>
      <Box>
        <Text fontSize="xs" color="red">
          2021.12.16
        </Text>
        <Text>
          Kitsuneさんから人材マッチングサイトへ参加リクエストがありました。承認か拒否をしてください。
        </Text>
      </Box>
      <Box>
        <Text fontSize="xs" color="red">
          2021.12.16
        </Text>
        <Text>
          Kitsuneさんから人材マッチングサイトへ参加リクエストがありました。承認か拒否をしてください。
          Kitsuneさんから人材マッチングサイトへ参加リクエストがありました。承認か拒否をしてください。
          Kitsuneさんから人材マッチングサイトへ参加リクエストがありました。承認か拒否をしてください。
        </Text>
      </Box>
      <Box>
        <Text fontSize="xs" color="red">
          2021.12.16
        </Text>
        <Text>
          人材マッチングサイトのオーナーよりプロジェクトへの参加依頼がありました。承認か拒否をしてください。
        </Text>
      </Box>
    </VStack>
  );
};
