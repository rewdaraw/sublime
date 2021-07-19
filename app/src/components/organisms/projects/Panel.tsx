import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

interface IProjectSearchPanel {
  children: React.ReactNode;
  imageSrc: string;
  title: string;
  subtitle: string;
}

export const ProjectSearchPanel: React.FC<IProjectSearchPanel> = ({
  children,
  imageSrc,
  title,
  subtitle,
}) => {
  return (
    <Box w="100%" bg="#F7F9FC" rounded={16} p={8}>
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
