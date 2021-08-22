import {
  Badge,
  Box,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SkillToUser } from "../../../../graphql/generated/types";
import { SkillList } from "../../../molecules/SkillList";

interface IUserInfo {
  imageUrl: string;
  type: string;
  name: string;
  email: string;
  github: string;
  twitter: string;
  experience: string;
  skills: SkillToUser[];
  description: string;
}

export const UserInfo: React.VFC<IUserInfo> = ({
  imageUrl,
  type,
  name,
  email,
  github,
  twitter,
  experience,
  skills,
  description,
}) => {
  return (
    <Box d={{ base: "block", md: "flex" }} alignItems="center">
      <Box
        d={{ base: "inline-flex", md: "block" }}
        minW={{ base: "", md: "130px" }}
        mr={{ sm: "0px", md: "0px" }}
      >
        <Box
          d={{ base: "inline-flex", md: "block" }}
          mr={{ base: "30px", md: "0px" }}
        >
          <Image
            src={imageUrl}
            boxSize={{ base: "80px", md: "130px" }}
            rounded="full"
            alt=""
          />
        </Box>
        <Box>
          {/* typeと名前 */}
          <Box textAlign={{ base: "left", sm: "center" }}>
            <Text
              d={{ sm: "flex", md: "block" }}
              mt={{ sm: "0px", md: "16px" }}
              fontSize="xs"
            >
              {type}
            </Text>
            <Text
              d={{ sm: "flex", md: "block" }}
              maxW={{ base: "130px", sm: "300px", md: "130px" }}
              fontWeight="bold"
            >
              {name}
            </Text>
          </Box>
          {/* ソーシャルアイコン */}
          <HStack
            mt={3}
            spacing="10px"
            w="fit-content"
            mx={{ base: "0px", sm: "auto" }}
          >
            <Link href={email} target="_blank">
              <Image
                src="/assets/images/icons/mail.svg"
                boxSize="24px"
                alt=""
              />
            </Link>
            <Spacer d={{ base: "none", sm: "block" }} />
            <Link href={github} target="_blank">
              <Image
                src="/assets/images/icons/github.svg"
                boxSize="24px"
                alt=""
              />
            </Link>
            <Spacer d={{ base: "none", sm: "block" }} />
            <Link href={twitter} target="_blank">
              <Image
                src="/assets/images/icons/twitter.svg"
                boxSize="24px"
                alt=""
              />
            </Link>
          </HStack>
        </Box>
      </Box>
      {/* プログラム歴 / スキル / 自己紹介 */}
      <VStack
        align="left"
        spacing={6}
        ml={{ md: "30px" }}
        mt={{ base: "12px", md: "0px" }}
      >
        <Box d={{ base: "none", md: "block" }}>
          <Badge mb={1}>プログラム歴</Badge>
          <Text>{experience}</Text>
        </Box>
        <Box>
          <Badge mb={2}>スキル</Badge>
          <SkillList skills={skills} />
        </Box>
        <Box mb={4}>
          <Badge mb={1}>自己紹介</Badge>
          <Text>{description}</Text>
        </Box>
      </VStack>
    </Box>
  );
};
