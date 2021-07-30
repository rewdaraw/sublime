import { gql } from "apollo-server-micro";

export const typeDefs = gql`
      type Query {
            # 以下Fields
            # sayHello: String
            getAllUsers: [User!]!
      }
      
      type Mutation {
            getUser(id: Int!): User
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
            projectsLiked: [Like!]
            projectsRequested: [JoinRequest!]
            projectsQa: [Qa!]
            created_at: String!
            updatedAt: String
      }
      
      type Project {
            id: Int!
            title: String
            description: String
            projectType: ProjectType
            projectTypeId: Int
            projectFeatures: [ProjectToProjectFeature]
            projectStatuses: [ProjectToProgressStatus]
            skills: [ProjectToSkill]
            usersLiked: [Like]
            usersRequested: [JoinRequest]
            usersAsked: [Qa]
            created_at: String!
            updatedAt: String
      }
`;
