import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    getAllProjects {
      id
      title
      description
      skillDescription
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
      projectStatuses {
        progressStatus {
          id
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
          email
          twitter_account_url
          github_account_url
          image_url
          type
          experience
          description
          skills {
            skill {
              id
              description
            }
          }
        }
      }
      usersAsked {
        user {
          id
          user_name
          email
          twitter_account_url
          github_account_url
          image_url
          type
          experience
          description
          skills {
            skill {
              id
              description
            }
          }
        }
      }
      usersRequested {
        user {
          id
          user_name
          email
          twitter_account_url
          github_account_url
          image_url
          type
          experience
          description
          skills {
            skill {
              id
              description
            }
          }
        }
      }
      createdAt
      updatedAt
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
      projectType {
        description
      }
      projectFeatures {
        projectFeature {
          description
        }
      }
      projectStatuses {
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
        }
      }
    }
  }
`;
