import React from "react";
import { Heading, Text, VStack } from "@chakra-ui/react";

export const BasicInfo: React.VFC = () => {
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        基本情報
      </Heading>
      <VStack spacing={4} align="left">
        <Text fontSize="xs" color="red">
          プロジェクト名
        </Text>
        <Text fontSize="md" mt="0px !important">
          人材マッチングSNS
        </Text>
      </VStack>
      <VStack spacing={4} align="left">
        <Text fontSize="xs" color="red">
          アプリケーションの種類
        </Text>
        <Text fontSize="md" mt="0px !important">
          SNS
        </Text>
      </VStack>
      <VStack spacing={4} align="left">
        <Text fontSize="xs" color="red">
          プロジェクト詳細
        </Text>
        <Text fontSize="md" lineHeight="1.9em !important" mt="0px !important">
          ポートフォリオに何を作ったらよいか迷う人 /<br />
          質の高いポートフォリオを作りたい人のための人材マッチングWebサービスです。
          <br />
          想定するその他のユーザーは以下になります。
          <br />
          ・未経験でもシステム構築を一人称で担当できるような人材を探している企業の採用担当者
          <br />
          ・何かwebサービス作りたいけどエンジニアじゃないしシステム構築にそんなにお金も支払えない人
          <br />
          ・高品質なポートフォリオを作成したいが1人では大変なため、一緒に開発をしてくれる人を探している人
          <br />
          ポートフォリオに何を作ったらよいか迷う人
          <br />
          質の高いポートフォリオを作りたい人のための人材マッチングWebサービスです。
          <br />
          想定するその他のユーザーは以下になります。
          <br />
          ・未経験でもシステム構築を一人称で担当できるような人材を探している企業の採用担当者
          <br />
          ・何かwebサービス作りたいけどエンジニアじゃないしシステム構築にそんなにお金も支払えない人
          <br />
          ・高品質なポートフォリオを作成したいが1人では大変なため、一緒に開発をしてくれる人を探している人
          <br />
        </Text>
      </VStack>
      <VStack spacing={4} align="left">
        <Text fontSize="11px" color="red">
          Gitレポジトリ
        </Text>
        <Text fontSize="md" mt="0px !important">
          非公開
        </Text>
      </VStack>
    </>
  );
};
