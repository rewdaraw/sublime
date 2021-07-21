import { Flex, Spacer, Text, Heading, IconButton, Image } from "@chakra-ui/react";
import React from "react";

interface ITitleWithButton {
  title: string;
  iconName: string;
}

export const TitleWithButton: React.FC<ITitleWithButton> = ({
  title,
  iconName,
}) => {
  return (
    <Flex align="center">
      <Heading as="h3" size="sm">
        {title}
      </Heading>
      <Spacer />
      <IconButton
        size="sm"
        bg="linear-gradient(80.21deg, #E84B81 15.29%, #E2675B 59.57%, #E39053 93.29%)"
        rounded="full"
        boxShadow="lg"
        aria-label="Action"
        _hover={{ opacity: "0.7" }}
        icon={
          <Image
            src={`/assets/images/icons/${iconName}.svg`}
            width="16px"
            height="16px"
            alt={title}
          />
        }
      />
    </Flex>
  );
};
