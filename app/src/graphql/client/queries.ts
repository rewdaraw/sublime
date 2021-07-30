import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    getAllProjects {
      id
      title
      description
      projectType
      # projectFeatures {

      # }
      # projectStatuses {

      # }
      # skills {

      # }
      # usersLiked {

      # }
      # usersRequested {

      # }
      # usersAsked {

      # }
      created_at
      updatedAt
    }
  }
`;
