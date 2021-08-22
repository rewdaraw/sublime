import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Box,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
  Spacer,
  VStack,
  Avatar,
  AvatarGroup,
  Button,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { WhiteRoundedCard } from "../../projects/WhiteRoundedCard";
import { FeatureList } from "../../../molecules/FeatureList";
import { SkillList } from "../../../molecules/SkillList";
import { JoinRequest, Like } from "../../../../graphql/generated/types";

interface IRelatedProjectInfo {
  projectsLiked: Like[];
  projectsRequested: JoinRequest[];
}

export const RelatedProjectInfo: React.FC<IRelatedProjectInfo> = ({
  projectsLiked,
  projectsRequested,
}) => {
  return (
    <Tabs size="xs" fontSize="xs" variant="solid-rounded" colorScheme="twitter">
      <TabList mb={6}>
        <Tab px={3} py={2}>
          参加済み
        </Tab>
        <Tab px={3} py={2}>
          オファー済み
        </Tab>
        <Tab px={3} py={2}>
          お気に入り
        </Tab>
      </TabList>

      <TabPanels>
        {/* 参加済みプロジェクト情報 */}
        <TabPanel p={0}>
          {projectsRequested &&
            projectsRequested
              .filter((pr) => pr.status) // 承認され済みに絞る
              .map((p, i) => (
                <Box key={i} mb={4}>
                  <WhiteRoundedCard>
                    <HStack>
                      <Box w={{ base: "100%", xl: "70%" }}>
                        <VStack align="left" spacing={4}>
                          <Text fontWeight="bold" fontSize="md">
                            {p.project.title}
                          </Text>
                          {/* スキル */}
                          <SkillList skills={p.project.skills} />
                          {/* 特徴 */}
                          <FeatureList features={p.project.projectFeatures} />
                          {/* 進捗状況とお気に入りされた数 / 参加中のユーザー */}
                          <Wrap align="center">
                            {/* 進捗状況とお気に入りされた数 */}
                            <WrapItem d={{ xl: "none" }} order={[2, 1]}>
                              <Box mr={12}>
                                <Text>
                                  進捗率
                                  <Box
                                    as="span"
                                    fontSize="xl"
                                    fontWeight="bold"
                                    color="red"
                                    mx={2}
                                  >
                                    {p.project.projectStatuses &&
                                      p.project.projectStatuses.slice(-1)[0] // 最後のステータスのデータを表示
                                        .progressStatus.rate}
                                  </Box>
                                  %
                                </Text>
                                <Text>
                                  お気に入りされた数
                                  <Box
                                    as="span"
                                    fontSize="xl"
                                    fontWeight="bold"
                                    color="red"
                                    mx={2}
                                  >
                                    {p.project.usersLiked &&
                                      p.project.usersLiked.length}
                                  </Box>
                                  人
                                </Text>
                              </Box>
                            </WrapItem>
                            {/* 参加中のユーザー */}
                            <WrapItem order={[1, 2]}>
                              <AvatarGroup size="md" max={3}>
                                {p.project.usersRequested &&
                                  p.project.usersRequested
                                    .filter((ur) => ur.status) // 参加承認済みのユーザーのみ
                                    .map((u, i) => (
                                      <Avatar key={i} src={u.user.image_url} />
                                    ))}
                              </AvatarGroup>
                            </WrapItem>
                          </Wrap>
                        </VStack>
                      </Box>
                      <Spacer />
                      <Box d={{ base: "none", xl: "block" }}>
                        <Text fontWeight="bold" textAlign="center" mb={2}>
                          進捗率
                        </Text>
                        <Image
                          src="/assets/images/dummy-chart.png"
                          boxSize="140px"
                          alt="chart"
                        />
                      </Box>
                      <Spacer />
                      <Box d={{ base: "none", xl: "flex" }} alignItems="center">
                        <Image
                          src="/assets/images/icons/FilledHeart.svg"
                          w="16px"
                          h="16px"
                          mr={2}
                          alt="お気に入り"
                        />
                        <Text fontSize="lg" fontWeight="bold">
                          {p.project.usersLiked && p.project.usersLiked.length}
                        </Text>
                      </Box>
                    </HStack>
                  </WhiteRoundedCard>
                  <Box align="right">
                    <Button size="sm" colorScheme="twitter" mt={2}>
                      編集
                    </Button>
                  </Box>
                  {/* オファー */}
                  {p.project.usersRequested &&
                    p.project.usersRequested.filter((ur) => !ur.status).length >
                      0 && ( // 参加オファー中で未承認のユーザーいるなら
                      <VStack align="left" p={4}>
                        <Text fontSize="sm" fontWeight="bold" mb={1}>
                          参加未承認のユーザー
                        </Text>
                        {p.project.usersRequested &&
                          p.project.usersRequested
                            .filter((ur) => !ur.status) // 参加未承認のユーザー
                            .map((u, i) => (
                              <>
                                <Wrap key={i} align="center">
                                  <WrapItem>
                                    <Flex alignItems="center">
                                      <Avatar
                                        size="sm"
                                        src={u.user.image_url}
                                        mr={4}
                                      />
                                      <Text fontWeight="bold">
                                        {u.user.user_name}
                                      </Text>
                                    </Flex>
                                  </WrapItem>
                                  <Spacer />
                                  <WrapItem>
                                    <Box>
                                      <ButtonGroup variant="solid" spacing="2">
                                        <Button colorScheme="twitter" size="sm">
                                          承認
                                        </Button>
                                        <Button size="sm">拒否</Button>
                                      </ButtonGroup>
                                    </Box>
                                  </WrapItem>
                                </Wrap>
                                <Divider />
                              </>
                            ))}
                      </VStack>
                    )}
                </Box>
              ))}
        </TabPanel>
        {/* 参加申請中プロジェクト情報 */}
        <TabPanel p={0}>
          {projectsRequested &&
            projectsRequested
              .filter((pr) => !pr.status) // 未承認に絞る
              .map((p, i) => (
                <Box key={i} mb={4}>
                  <WhiteRoundedCard>
                    <HStack>
                      <Box w={{ base: "100%", xl: "70%" }}>
                        <VStack align="left" spacing={4}>
                          <Text fontWeight="bold" fontSize="md">
                            {p.project.title}
                          </Text>
                          {/* スキル */}
                          <SkillList skills={p.project.skills} />
                          {/* 特徴 */}
                          <FeatureList features={p.project.projectFeatures} />
                          {/* 進捗状況とお気に入りされた数 / 参加中のユーザー */}
                          <Wrap align="center">
                            {/* 進捗状況とお気に入りされた数 */}
                            <WrapItem d={{ xl: "none" }} order={[2, 1]}>
                              <Box mr={12}>
                                <Text>
                                  進捗率
                                  <Box
                                    as="span"
                                    fontSize="xl"
                                    fontWeight="bold"
                                    color="red"
                                    mx={2}
                                  >
                                    {p.project.projectStatuses &&
                                      p.project.projectStatuses.slice(-1)[0] // 最後のステータスのデータを表示
                                        .progressStatus.rate}
                                  </Box>
                                  %
                                </Text>
                                <Text>
                                  お気に入りされた数
                                  <Box
                                    as="span"
                                    fontSize="xl"
                                    fontWeight="bold"
                                    color="red"
                                    mx={2}
                                  >
                                    {p.project.usersLiked &&
                                      p.project.usersLiked.length}
                                  </Box>
                                  人
                                </Text>
                              </Box>
                            </WrapItem>
                            {/* 参加中のユーザー */}
                            <WrapItem order={[1, 2]}>
                              <AvatarGroup size="md" max={3}>
                                {p.project.usersRequested &&
                                  p.project.usersRequested
                                    .filter((ur) => ur.status) // 参加承認済みのユーザーのみ
                                    .map((u, i) => (
                                      <Avatar key={i} src={u.user.image_url} />
                                    ))}
                              </AvatarGroup>
                            </WrapItem>
                          </Wrap>
                        </VStack>
                      </Box>
                      <Spacer />
                      <Box d={{ base: "none", xl: "block" }}>
                        <Text fontWeight="bold" textAlign="center" mb={2}>
                          進捗率
                        </Text>
                        <Image
                          src="/assets/images/dummy-chart.png"
                          boxSize="140px"
                          alt="chart"
                        />
                      </Box>
                      <Spacer />
                      <Box d={{ base: "none", xl: "flex" }} alignItems="center">
                        <Image
                          src="/assets/images/icons/FilledHeart.svg"
                          w="16px"
                          h="16px"
                          mr={2}
                          alt="お気に入り"
                        />
                        <Text fontSize="lg" fontWeight="bold">
                          {p.project.usersLiked && p.project.usersLiked.length}
                        </Text>
                      </Box>
                    </HStack>
                  </WhiteRoundedCard>
                  <Box align="right">
                    <Button size="sm" colorScheme="twitter" mt={2}>
                      編集
                    </Button>
                  </Box>
                  {/* オファー */}
                  {p.project.usersRequested &&
                    p.project.usersRequested.filter((ur) => !ur.status).length >
                      0 && ( // 参加オファー中で未承認のユーザーいるなら
                      <VStack align="left" p={4}>
                        <Text fontSize="sm" fontWeight="bold" mb={1}>
                          参加未承認のユーザー
                        </Text>
                        {p.project.usersRequested &&
                          p.project.usersRequested
                            .filter((ur) => !ur.status) // 参加未承認のユーザー
                            .map((u, i) => (
                              <>
                                <Wrap key={i} align="center">
                                  <WrapItem>
                                    <Flex alignItems="center">
                                      <Avatar
                                        size="sm"
                                        src={u.user.image_url}
                                        mr={4}
                                      />
                                      <Text fontWeight="bold">
                                        {u.user.user_name}
                                      </Text>
                                    </Flex>
                                  </WrapItem>
                                  <Spacer />
                                  <WrapItem>
                                    <Box>
                                      <ButtonGroup variant="solid" spacing="2">
                                        <Button isDisabled>承認待ち</Button>
                                      </ButtonGroup>
                                    </Box>
                                  </WrapItem>
                                </Wrap>
                                <Divider />
                              </>
                            ))}
                      </VStack>
                    )}
                </Box>
              ))}
        </TabPanel>
        {/* お気に入りプロジェクト情報 */}
        <TabPanel p={0}>
          {projectsLiked &&
            projectsLiked.map((p, i) => (
              <Box key={i} mb={4}>
                <WhiteRoundedCard>
                  <HStack>
                    <Box w={{ base: "100%", xl: "70%" }}>
                      <VStack align="left" spacing={4}>
                        <Text fontWeight="bold" fontSize="md">
                          {p.project.title}
                        </Text>
                        {/* スキル */}
                        <SkillList skills={p.project.skills} />
                        {/* 特徴 */}
                        <FeatureList features={p.project.projectFeatures} />
                        {/* 進捗状況とお気に入りされた数 / 参加中のユーザー */}
                        <Wrap align="center">
                          {/* 進捗状況とお気に入りされた数 */}
                          <WrapItem d={{ xl: "none" }} order={[2, 1]}>
                            <Box mr={12}>
                              <Text>
                                進捗率
                                <Box
                                  as="span"
                                  fontSize="xl"
                                  fontWeight="bold"
                                  color="red"
                                  mx={2}
                                >
                                  {p.project.projectStatuses &&
                                    p.project.projectStatuses.slice(-1)[0] // 最後のステータスのデータを表示
                                      .progressStatus.rate}
                                </Box>
                                %
                              </Text>
                              <Text>
                                お気に入りされた数
                                <Box
                                  as="span"
                                  fontSize="xl"
                                  fontWeight="bold"
                                  color="red"
                                  mx={2}
                                >
                                  {p.project.usersLiked &&
                                    p.project.usersLiked.length}
                                </Box>
                                人
                              </Text>
                            </Box>
                          </WrapItem>
                          {/* 参加中のユーザー */}
                          <WrapItem order={[1, 2]}>
                            <AvatarGroup size="md" max={3}>
                              {p.project.usersRequested &&
                                p.project.usersRequested
                                  .filter((ur) => ur.status) // 参加承認済みのユーザーのみ
                                  .map((u, i) => (
                                    <Avatar key={i} src={u.user.image_url} />
                                  ))}
                            </AvatarGroup>
                          </WrapItem>
                        </Wrap>
                      </VStack>
                    </Box>
                    <Spacer />
                    <Box d={{ base: "none", xl: "block" }}>
                      <Text fontWeight="bold" textAlign="center" mb={2}>
                        進捗率
                      </Text>
                      <Image
                        src="/assets/images/dummy-chart.png"
                        boxSize="140px"
                        alt="chart"
                      />
                    </Box>
                    <Spacer />
                    <Box d={{ base: "none", xl: "flex" }} alignItems="center">
                      <Image
                        src="/assets/images/icons/FilledHeart.svg"
                        w="16px"
                        h="16px"
                        mr={2}
                        alt="お気に入り"
                      />
                      <Text fontSize="lg" fontWeight="bold">
                        {p.project.usersLiked && p.project.usersLiked.length}
                      </Text>
                    </Box>
                  </HStack>
                </WhiteRoundedCard>
                <Box align="right">
                  <Button size="sm" colorScheme="twitter" mt={2}>
                    編集
                  </Button>
                </Box>
                {/* オファー */}
                {p.project.usersRequested &&
                  p.project.usersRequested.filter((ur) => !ur.status).length >
                    0 && ( // 参加オファー中で未承認のユーザーいるなら
                    <VStack align="left" p={4}>
                      <Text fontSize="sm" fontWeight="bold" mb={1}>
                        参加未承認のユーザー
                      </Text>
                      {p.project.usersRequested &&
                        p.project.usersRequested
                          .filter((ur) => !ur.status) // 参加未承認のユーザー
                          .map((u, i) => (
                            <>
                              <Wrap key={i} align="center">
                                <WrapItem>
                                  <Flex alignItems="center">
                                    <Avatar
                                      size="sm"
                                      src={u.user.image_url}
                                      mr={4}
                                    />
                                    <Text fontWeight="bold">
                                      {u.user.user_name}
                                    </Text>
                                  </Flex>
                                </WrapItem>
                                <Spacer />
                                <WrapItem>
                                  <Box>
                                    <ButtonGroup variant="solid" spacing="2">
                                      <Button isDisabled>承認待ち</Button>
                                    </ButtonGroup>
                                  </Box>
                                </WrapItem>
                              </Wrap>
                              <Divider />
                            </>
                          ))}
                    </VStack>
                  )}
              </Box>
            ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
