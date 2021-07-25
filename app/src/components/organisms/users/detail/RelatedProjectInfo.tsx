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
} from "@chakra-ui/react";
import { WhiteRoundedCard } from "../../projects/WhiteRoundedCard";
import { FeatureList } from "../../../molecules/FeatureList";
import { SkillList } from "../../../molecules/SkillList";

export const RelatedProjectInfo: React.FC = () => {
  return (
    <Tabs size="sm" variant="solid-rounded" colorScheme="red">
      <TabList mb={6}>
        <Tab>参加済み</Tab>
        <Tab>オファー済み</Tab>
        <Tab>お気に入り</Tab>
      </TabList>

      <TabPanels>
        <TabPanel p={0}>
          <Box mb={4}>
            <WhiteRoundedCard>
              <HStack>
                <Box w={{ base: "100%", xl: "70%" }}>
                  <VStack align="left" spacing={6}>
                    <Wrap>
                      <WrapItem>
                        <Text fontWeight="bold" mr={4}>
                          人材マッチングサイト
                        </Text>
                      </WrapItem>
                      <WrapItem>
                        <SkillList />
                      </WrapItem>
                    </Wrap>
                    <FeatureList />
                    <Wrap align="center">
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
                              30
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
                              9
                            </Box>
                          </Text>
                        </Box>
                      </WrapItem>
                      <WrapItem order={[1, 2]}>
                        <AvatarGroup size="md" max={3}>
                          <Avatar
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                          <Avatar
                            name="Segun Adebayo"
                            src="https://bit.ly/sage-adebayo"
                          />
                          <Avatar
                            name="Kent Dodds"
                            src="https://bit.ly/kent-c-dodds"
                          />
                          <Avatar
                            name="Prosper Otemuyiwa"
                            src="https://bit.ly/prosper-baba"
                          />
                          <Avatar
                            name="Christian Nwamba"
                            src="https://bit.ly/code-beast"
                          />
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
                  <Text>9</Text>
                </Box>
              </HStack>
            </WhiteRoundedCard>
          </Box>
          <Box mb={4}>
            <WhiteRoundedCard>
              <HStack>
                <Box w={{ base: "100%", xl: "70%" }}>
                  <VStack align="left" spacing={6}>
                    <Wrap>
                      <WrapItem>
                        <Text fontWeight="bold" mr={4}>
                          人材マッチングサイト
                        </Text>
                      </WrapItem>
                      <WrapItem>
                        <SkillList />
                      </WrapItem>
                    </Wrap>
                    <FeatureList />
                    <Wrap align="center">
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
                              30
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
                              9
                            </Box>
                          </Text>
                        </Box>
                      </WrapItem>
                      <WrapItem order={[1, 2]}>
                        <AvatarGroup size="md" max={3}>
                          <Avatar
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                          <Avatar
                            name="Segun Adebayo"
                            src="https://bit.ly/sage-adebayo"
                          />
                          <Avatar
                            name="Kent Dodds"
                            src="https://bit.ly/kent-c-dodds"
                          />
                          <Avatar
                            name="Prosper Otemuyiwa"
                            src="https://bit.ly/prosper-baba"
                          />
                          <Avatar
                            name="Christian Nwamba"
                            src="https://bit.ly/code-beast"
                          />
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
                  <Text>9</Text>
                </Box>
              </HStack>
            </WhiteRoundedCard>
          </Box>
          {/* オファー */}
          <VStack
            align="left"
            p={{ base: "16px", sm: "32px" }}
            pt={{ base: "0px", sm: "16px" }}
          >
            <Wrap>
              <WrapItem>
                <Flex alignItems="center">
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                    mr={4}
                  />
                  <Text fontWeight="bold">Kitsuneさんからの参加オファー</Text>
                </Flex>
              </WrapItem>
              <Spacer />
              <WrapItem>
                <Box>
                  <ButtonGroup variant="solid" spacing="6">
                    <Button colorScheme="twitter">承認</Button>
                    <Button>拒否</Button>
                  </ButtonGroup>
                </Box>
              </WrapItem>
            </Wrap>
            <Wrap>
              <WrapItem>
                <Flex alignItems="center">
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                    mr={4}
                  />
                  <Text fontWeight="bold">Kitsuneさんからの参加オファー</Text>
                </Flex>
              </WrapItem>
              <Spacer />
              <WrapItem>
                <Box>
                  <ButtonGroup variant="solid" spacing="6">
                    <Button colorScheme="twitter">承認</Button>
                    <Button>拒否</Button>
                  </ButtonGroup>
                </Box>
              </WrapItem>
            </Wrap>
            <Wrap alignItems="center">
              <WrapItem>
                <Flex alignItems="center">
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                    mr={4}
                  />
                  <Text fontWeight="bold">参加オファーの状況</Text>
                </Flex>
              </WrapItem>
              <Spacer />
              <WrapItem>
                <Box>
                  <ButtonGroup variant="outline" spacing="6">
                    {/* <Button colorScheme="twitter">承認</Button> */}
                    <Button isDisabled>承認待ち</Button>
                  </ButtonGroup>
                </Box>
              </WrapItem>
            </Wrap>
          </VStack>
        </TabPanel>
        <TabPanel p={0}>
          <p>オファー済み!</p>
        </TabPanel>
        <TabPanel p={0}>
          <p>お気に入り!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
