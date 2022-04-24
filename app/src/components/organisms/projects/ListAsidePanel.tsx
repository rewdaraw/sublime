import React from "react";

import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface IPanel {
  children: React.ReactNode;
  imageSrc: string;
  title: string;
  subtitle: string;
}

export const ListAsidePanel: React.FC<IPanel> = ({
  children,
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <Box w="100%" bg="white" rounded={16} p={6}>
      <Flex align="center" mb={2}>
        <Image d="inline-flex" src={imageSrc} alt="" boxSize={5} mr={2} />
        <Heading as="h3" fontSize="16px">
          {title}
        </Heading>
      </Flex>
      <Text fontSize="11px" color="#666666" mb={7}>
        {subtitle}
      </Text>
      {children}
    </Box>
  );
};
