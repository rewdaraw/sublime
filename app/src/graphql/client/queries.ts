import { gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query getAllProjects {
    getAllProjects {
      id
      title
      description
      projectType {
        id
        description
      }
      projectFeatures {
        ProjectFeature {
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
      created_at
      updatedAt
    }
  }
`;
