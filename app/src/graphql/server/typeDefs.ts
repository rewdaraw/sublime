import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar DateTime

  type Query {
    # 以下Fields
    getAllProjects: [Project]
    getProjectById(id: Int!): Project
  }

  # --------------------------------------------------

  type Skill {
    id: Int
    description: String
  }

  type User {
    id: Int
    user_name: String
    email: String
    twitter_account_url: String
    github_account_url: String
    image_url: String
    type: String
    experience: String
    description: String
    skills: [SkillToUser]
    projectsLiked: [Like]
    projectsRequested: [JoinRequest]
    projectsQa: [Project]
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Project {
    id: Int
    title: String
    description: String
    skillDescription: String
    featureDescription: String
    projectType: ProjectType
    projectFeatures: [ProjectToProjectFeature]
    projectStatuses: [ProjectToProgressStatus]
    skills: [ProjectToSkill]
    usersLiked: [Like]
    usersRequested: [JoinRequest]
    usersAsked: [Qa]
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ProjectType {
    id: Int
    description: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ProjectFeature {
    id: Int
    description: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ProgressStatus {
    id: Int
    rate: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ProjectToSkill {
    id: Int
    project: Project
    projectId: Int
    skill: Skill
    skillId: Int
    createdAt: DateTime
    updatedAt: DateTime
  }

  type ProjectToProgressStatus {
    id: Int
    progressStatus: ProgressStatus
    progressStatusId: Int
    project: Project
    projectId: Int
    description: String
    updatedAt: DateTime
    createdAt: DateTime
  }

  type ProjectToProjectFeature {
    id: Int
    Project: Project
    projectId: Int
    projectFeature: ProjectFeature
    projectFeatureId: Int
    updatedAt: DateTime
    createdAt: DateTime
  }

  type SkillToUser {
    id: Int
    skill: Skill
    skillId: Int
    user: User
    userId: Int
    updatedAt: DateTime
    createdAt: DateTime
  }

  type Like {
    id: Int
    user: User
    userId: Int
    project: Project
    projectId: Int
    updatedAt: DateTime
    createdAt: DateTime
  }

  type JoinRequest {
    id: Int
    user: User
    userId: Int
    project: Project
    projectId: Int
    status: Int
    updatedAt: DateTime
    createdAt: DateTime
  }

  type Qa {
    id: Int
    user: User
    userId: Int
    project: Project
    projectId: Int
    description: String
    updatedAt: DateTime
    createdAt: DateTime
  }
`;
