import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { OutlinedFeatureList } from "../../../molecules/OutlinedFeatureList";
import { ProjectToProjectFeature } from "../../../../graphql/generated/types";

interface IFeatureInfo {
  featureDescription: string;
  features: ProjectToProjectFeature[];
}

export const FeatureInfo: React.VFC<IFeatureInfo> = ({
  featureDescription,
  features,
}) => {
  console.log("FeatureInfo component rendered!");
  return (
    <>
      <Heading as="h3" size="sm" mb={4}>
        特徴や特典
      </Heading>
      <OutlinedFeatureList features={features} />
      <Box mt="24px !important">
        <Text fontSize="md" lineHeight="1.9em !important">
          {featureDescription}
        </Text>
      </Box>
    </>
  );
};
