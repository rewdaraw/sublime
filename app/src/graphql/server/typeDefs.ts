import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    # 以下Fields
    getAllProjects: [Project]
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
    created_at: String
    updatedAt: String
  }

  type Project {
    id: Int
    title: String
    description: String
    projectType: ProjectType
    projectFeatures: [ProjectToProjectFeature]
    projectStatuses: [ProjectToProgressStatus]
    skills: [ProjectToSkill]
    usersLiked: [Like]
    usersRequested: [JoinRequest]
    usersAsked: [Qa]
    created_at: String
    updatedAt: String
  }

  type ProjectType {
    id: Int
    description: String
    created_at: String
    updatedAt: String
  }

  type ProjectFeature {
    id: Int
    description: String
    created_at: String
    updatedAt: String
  }

  type ProgressStatus {
    id: Int
    rate: String
    created_at: String
    updatedAt: String
  }

  type ProjectToSkill {
    id: Int
    project: Project
    projectId: Int
    skill: Skill
    skillId: Int
    created_at: String
    updatedAt: String
  }

  type ProjectToProgressStatus {
    id: Int
    progressStatus: ProgressStatus
    progressStatusId: Int
    project: Project
    projectId: Int
    updatedAt: String
    created_at: String
  }

  type ProjectToProjectFeature {
    id: Int
    Project: Project
    projectId: Int
    projectFeature: ProjectFeature
    projectFeatureId: Int
    updatedAt: String
    created_at: String
  }

  type SkillToUser {
    id: Int
    skill: Skill
    skillId: Int
    user: User
    userId: Int
    updatedAt: String
    created_at: String
  }

  type Like {
    id: Int
    user: User
    userId: Int
    project: Project
    projectId: Int
    updatedAt: String
    created_at: String
  }

  type JoinRequest {
    id: Int
    user: User
    userId: Int
    project: Project
    projectId: Int
    updatedAt: String
    created_at: String
  }

  type Qa {
    id: Int
    user: User
    userId: Int
    project: Project
    projectId: Int
    updatedAt: String
    created_at: String
  }
`;
