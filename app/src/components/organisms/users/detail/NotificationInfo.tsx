import React from "react";

import { Badge, Box, Divider, Text, VStack } from "@chakra-ui/react";

// TODO: informationsテーブル | adminInformationsテーブルを作る
// TODO: id, project_id, user_id, description, unread(boolean) | id, message
export const NotificationInfo: React.VFC = () => {
  return (
    <VStack align="left" spacing={6} maxH="300px" overflow="scroll">
      <Box>
        <Badge mb={1}>2021.12.16</Badge>
        <Text>
          Kitsuneさんから人材マッチングサイトへ参加リクエストがありました。承認か拒否をしてください。
        </Text>
      </Box>
      <Divider mt={4} />
      <Box>
        <Badge mb={1}>2021.12.16</Badge>
        <Text>
          Kitsuneさんから人材マッチングサイトへ参加リクエストがありました。承認か拒否をしてください。
        </Text>
      </Box>
      <Divider mt={4} />
      <Box>
        <Badge mb={1}>2021.12.16</Badge>
        <Text>
          人材マッチングサイトのオーナーよりプロジェクトへの参加依頼がありました。承認か拒否をしてください。
        </Text>
      </Box>
      <Divider mt={4} />
    </VStack>
  );
};
