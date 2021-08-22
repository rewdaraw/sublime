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

export const GET_USER_BY_ID = gql`
  query getUserById($id: Int!) {
    getUserById(id: $id) {
      id
      user_name
      email
      twitter_account_url
      github_account_url
      image_url
      type
      experience
      description
      # userの保有するスキル
      skills {
        skill {
          description
        }
      }
      # userがいいねしたプロジェクト
      projectsLiked {
        project {
          id
          title
          skills {
            skill {
              description
            }
          }
          # userがいいねしたプロジェクトの特徴
          projectFeatures {
            projectFeature {
              description
            }
          }
          # userがいいねしたプロジェクトの進捗状況
          projectStatuses {
            progressStatus {
              rate
            }
          }
          # userがいいねしたプロジェクトの参加ユーザー
          usersRequested {
            status
            user {
              image_url
            }
          }
        }
      }
      # userが参加 / 参加申請 中のプロジェクト
      projectsRequested {
        project {
          id
          title
          skills {
            skill {
              description
            }
          }
          # userが参加 / 参加申請 中のプロジェクトの特徴
          projectFeatures {
            projectFeature {
              description
            }
          }
          # userが参加 / 参加申請 中のプロジェクトの進捗状況
          projectStatuses {
            progressStatus {
              rate
            }
          }
          # userが参加 / 参加申請 中のプロジェクトの参加ユーザー
          usersRequested {
            status
            user {
              image_url
            }
          }
        }
      }
    }
  }
`;
