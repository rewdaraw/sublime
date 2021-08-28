import React from "react";
import Image from "next/image";
import SearchGlass from "../../../public/assets/images/icons/SearchGlass.svg";
import { Box, Button, ButtonGroup, Flex, IconButton } from "@chakra-ui/react";
import { ProjectToProjectFeature } from "../../graphql/generated/types";

// interface ISearchSwitchButton {
//   features: ProjectToProjectFeature[];
// }

export const SearchSwitchButton: React.VFC = () => {
  console.log("SearchSwitchButton component rendered!");
  return (
    <Flex align="center">
      <Box mr={2} pt={1}>
        <Image src={SearchGlass} alt="検索" width={20} height={20} />
      </Box>

      {/* <Box borderRadius="full" bgColor="yellow">
        <Image src={SearchGlass} alt="検索" width={16} height={16} />
      </Box> */}
      {/* <IconButton
        pos="absolute"
        zIndex="99"
        size="md"
        bg="yellow"
        rounded="full"
        aria-label="Search People"
        icon={
          <Image
            src="/assets/images/icons/SearchGlass.svg"
            boxSize={4}
            alt="折りたたむ"
          />
        }
      /> */}

      <ButtonGroup spacing={0}>
        <Button
          colorScheme="whiteAlpha"
          color="black"
          boxShadow="md"
          borderTopLeftRadius={6}
          borderBottomLeftRadius={6}
          borderTopRightRadius={0}
          borderBottomRightRadius={0}
          // pl="50px"
          pb={1}
        >
          プロジェクト
        </Button>
        <Button
          colorScheme="white"
          color="gray"
          boxShadow="md"
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          borderTopRightRadius={6}
          borderBottomRightRadius={6}
          pr={5}
          pb={1}
        >
          パートナー
        </Button>
      </ButtonGroup>
    </Flex>
  );
};
