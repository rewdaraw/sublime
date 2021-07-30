import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    # 以下Fields
    getAllProjects: [Project]
  }

  # --------------------------------------------------

  type Skill {
    id: Int!
    description: String!
  }

  type User {
    id: Int!
    email: String
    twitter_account_url: String
    image_url: String
    type: String
    experience: String
    description: String
    skills: [Skill!]
    projectsLiked: [Project!]
    projectsRequested: [Project!]
    projectsQa: [Project!]
    created_at: String!
    updatedAt: String
  }

  # type Project {
  #   id: Int!
  #   title: String
  #   description: String
  #   projectType: String
  #   projectFeatures: [ProjectFeature]
  #   projectStatuses: [ProgressStatus]
  #   skills: [Skill]
  #   usersLiked: [User]
  #   usersRequested: [User]
  #   usersAsked: [User]
  #   created_at: String!
  #   updatedAt: String
  # }
  type Project {
    id: Int!
    title: String
    description: String
    projectType: String
    projectFeatures: [ProjectFeature]
    projectStatuses: [ProgressStatus]
    skills: [Skill]
    usersLiked: [User]
    usersRequested: [User]
    usersAsked: [User]
    created_at: String!
    updatedAt: String
  }

  type ProjectType {
    id: Int!
    description: String!
    created_at: String!
    updatedAt: String
  }

  type ProjectFeature {
    id: Int!
    description: String!
    created_at: String!
    updatedAt: String
  }

  type ProgressStatus {
    id: Int!
    rate: String!
    created_at: String!
    updatedAt: String
  }
`;
