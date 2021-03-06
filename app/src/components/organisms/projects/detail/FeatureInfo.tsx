import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

import { ProjectToProjectFeature } from "../../../../graphql/generated/types";
import { OutlinedFeatureList } from "../../../molecules/OutlinedFeatureList";

interface IFeatureInfo {
  featureDescription: string;
  features: ProjectToProjectFeature[];
}

export const FeatureInfo: React.VFC<IFeatureInfo> = ({ featureDescription, features }) => {
  console.log("FeatureInfo component rendered!");
  return (
    <>
      <OutlinedFeatureList features={features} />
      <Box mt="24px !important">
        <Text fontSize="md" lineHeight="1.9em !important">
          {featureDescription}
        </Text>
      </Box>
    </>
  );
};
