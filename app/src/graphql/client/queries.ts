import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    getAllProjects {
      id
      title
      createdAt
      updatedAt
      projectType {
        id
        description
      }
      projectFeatures {
        projectFeature {
          id
          description
        }
      }
      skills {
        skill {
          id
          description
        }
      }
      usersLiked {
        user {
          id
          user_name
        }
      }
      usersRequested {
        user {
          id
          user_name
          image_url
        }
      }
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query getProjectById($id: Int!) {
    getProjectById(id: $id) {
      id
      title
      description
      skillDescription
      featureDescription
      projectType {
        description
      }
      projectFeatures {
        projectFeature {
          id
          description
        }
      }
      projectStatuses {
        description
        createdAt
        progressStatus {
          rate
        }
      }
      skills {
        skill {
          id
          description
        }
      }
      usersLiked {
        user {
          id
          user_name
        }
      }
      usersRequested {
        status
        user {
          id
          user_name
          type
          image_url
        }
      }
      usersAsked {
        description
        createdAt
        user {
          id
          user_name
          type
          image_url
        }
      }
    }
  }
`;
