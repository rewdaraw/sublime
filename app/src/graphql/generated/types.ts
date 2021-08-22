import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: Date;
};

export type JoinRequest = {
  __typename?: "JoinRequest";
  id?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["Int"]>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars["Int"]>;
  status?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type Like = {
  __typename?: "Like";
  id?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["Int"]>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type ProgressStatus = {
  __typename?: "ProgressStatus";
  id?: Maybe<Scalars["Int"]>;
  rate?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Project = {
  __typename?: "Project";
  id?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  skillDescription?: Maybe<Scalars["String"]>;
  featureDescription?: Maybe<Scalars["String"]>;
  projectType?: Maybe<ProjectType>;
  projectFeatures?: Maybe<Array<Maybe<ProjectToProjectFeature>>>;
  projectStatuses?: Maybe<Array<Maybe<ProjectToProgressStatus>>>;
  skills?: Maybe<Array<Maybe<ProjectToSkill>>>;
  usersLiked?: Maybe<Array<Maybe<Like>>>;
  usersRequested?: Maybe<Array<Maybe<JoinRequest>>>;
  usersAsked?: Maybe<Array<Maybe<Qa>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProjectFeature = {
  __typename?: "ProjectFeature";
  id?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProjectToProgressStatus = {
  __typename?: "ProjectToProgressStatus";
  id?: Maybe<Scalars["Int"]>;
  progressStatus?: Maybe<ProgressStatus>;
  progressStatusId?: Maybe<Scalars["Int"]>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type ProjectToProjectFeature = {
  __typename?: "ProjectToProjectFeature";
  id?: Maybe<Scalars["Int"]>;
  Project?: Maybe<Project>;
  projectId?: Maybe<Scalars["Int"]>;
  projectFeature?: Maybe<ProjectFeature>;
  projectFeatureId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type ProjectToSkill = {
  __typename?: "ProjectToSkill";
  id?: Maybe<Scalars["Int"]>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars["Int"]>;
  skill?: Maybe<Skill>;
  skillId?: Maybe<Scalars["Int"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type ProjectType = {
  __typename?: "ProjectType";
  id?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type Qa = {
  __typename?: "Qa";
  id?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["Int"]>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type Query = {
  __typename?: "Query";
  getAllProjects?: Maybe<Array<Maybe<Project>>>;
  getProjectById?: Maybe<Project>;
  getUserById?: Maybe<User>;
};

export type QueryGetProjectByIdArgs = {
  id: Scalars["Int"];
};

export type QueryGetUserByIdArgs = {
  id: Scalars["Int"];
};

export type Skill = {
  __typename?: "Skill";
  id?: Maybe<Scalars["Int"]>;
  description?: Maybe<Scalars["String"]>;
};

export type SkillToUser = {
  __typename?: "SkillToUser";
  id?: Maybe<Scalars["Int"]>;
  skill?: Maybe<Skill>;
  skillId?: Maybe<Scalars["Int"]>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars["Int"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
  createdAt?: Maybe<Scalars["DateTime"]>;
};

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["Int"]>;
  user_name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  twitter_account_url?: Maybe<Scalars["String"]>;
  github_account_url?: Maybe<Scalars["String"]>;
  image_url?: Maybe<Scalars["String"]>;
  type?: Maybe<Scalars["String"]>;
  experience?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  skills?: Maybe<Array<Maybe<SkillToUser>>>;
  projectsLiked?: Maybe<Array<Maybe<Like>>>;
  projectsRequested?: Maybe<Array<Maybe<JoinRequest>>>;
  projectsQa?: Maybe<Array<Maybe<Project>>>;
  createdAt?: Maybe<Scalars["DateTime"]>;
  updatedAt?: Maybe<Scalars["DateTime"]>;
};

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllProjectsQuery = {
  __typename?: "Query";
  getAllProjects?: Maybe<
    Array<
      Maybe<{
        __typename?: "Project";
        id?: Maybe<number>;
        title?: Maybe<string>;
        createdAt?: Maybe<Date>;
        updatedAt?: Maybe<Date>;
        projectType?: Maybe<{
          __typename?: "ProjectType";
          id?: Maybe<number>;
          description?: Maybe<string>;
        }>;
        projectFeatures?: Maybe<
          Array<
            Maybe<{
              __typename?: "ProjectToProjectFeature";
              projectFeature?: Maybe<{
                __typename?: "ProjectFeature";
                id?: Maybe<number>;
                description?: Maybe<string>;
              }>;
            }>
          >
        >;
        skills?: Maybe<
          Array<
            Maybe<{
              __typename?: "ProjectToSkill";
              skill?: Maybe<{
                __typename?: "Skill";
                id?: Maybe<number>;
                description?: Maybe<string>;
              }>;
            }>
          >
        >;
        usersLiked?: Maybe<
          Array<
            Maybe<{
              __typename?: "Like";
              user?: Maybe<{
                __typename?: "User";
                id?: Maybe<number>;
                user_name?: Maybe<string>;
              }>;
            }>
          >
        >;
        usersRequested?: Maybe<
          Array<
            Maybe<{
              __typename?: "JoinRequest";
              user?: Maybe<{
                __typename?: "User";
                id?: Maybe<number>;
                user_name?: Maybe<string>;
                image_url?: Maybe<string>;
              }>;
            }>
          >
        >;
      }>
    >
  >;
};

export type GetProjectByIdQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetProjectByIdQuery = {
  __typename?: "Query";
  getProjectById?: Maybe<{
    __typename?: "Project";
    id?: Maybe<number>;
    title?: Maybe<string>;
    description?: Maybe<string>;
    skillDescription?: Maybe<string>;
    featureDescription?: Maybe<string>;
    projectType?: Maybe<{
      __typename?: "ProjectType";
      description?: Maybe<string>;
    }>;
    projectFeatures?: Maybe<
      Array<
        Maybe<{
          __typename?: "ProjectToProjectFeature";
          projectFeature?: Maybe<{
            __typename?: "ProjectFeature";
            id?: Maybe<number>;
            description?: Maybe<string>;
          }>;
        }>
      >
    >;
    projectStatuses?: Maybe<
      Array<
        Maybe<{
          __typename?: "ProjectToProgressStatus";
          description?: Maybe<string>;
          createdAt?: Maybe<Date>;
          progressStatus?: Maybe<{
            __typename?: "ProgressStatus";
            rate?: Maybe<string>;
          }>;
        }>
      >
    >;
    skills?: Maybe<
      Array<
        Maybe<{
          __typename?: "ProjectToSkill";
          skill?: Maybe<{
            __typename?: "Skill";
            id?: Maybe<number>;
            description?: Maybe<string>;
          }>;
        }>
      >
    >;
    usersLiked?: Maybe<
      Array<
        Maybe<{
          __typename?: "Like";
          user?: Maybe<{
            __typename?: "User";
            id?: Maybe<number>;
            user_name?: Maybe<string>;
          }>;
        }>
      >
    >;
    usersRequested?: Maybe<
      Array<
        Maybe<{
          __typename?: "JoinRequest";
          status?: Maybe<number>;
          user?: Maybe<{
            __typename?: "User";
            id?: Maybe<number>;
            user_name?: Maybe<string>;
            type?: Maybe<string>;
            image_url?: Maybe<string>;
          }>;
        }>
      >
    >;
    usersAsked?: Maybe<
      Array<
        Maybe<{
          __typename?: "Qa";
          description?: Maybe<string>;
          createdAt?: Maybe<Date>;
          user?: Maybe<{
            __typename?: "User";
            id?: Maybe<number>;
            user_name?: Maybe<string>;
            type?: Maybe<string>;
            image_url?: Maybe<string>;
          }>;
        }>
      >
    >;
  }>;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["Int"];
}>;

export type GetUserByIdQuery = {
  __typename?: "Query";
  getUserById?: Maybe<{
    __typename?: "User";
    id?: Maybe<number>;
    user_name?: Maybe<string>;
    email?: Maybe<string>;
    twitter_account_url?: Maybe<string>;
    github_account_url?: Maybe<string>;
    image_url?: Maybe<string>;
    type?: Maybe<string>;
    experience?: Maybe<string>;
    description?: Maybe<string>;
    skills?: Maybe<
      Array<
        Maybe<{
          __typename?: "SkillToUser";
          skill?: Maybe<{ __typename?: "Skill"; description?: Maybe<string> }>;
        }>
      >
    >;
    projectsLiked?: Maybe<
      Array<
        Maybe<{
          __typename?: "Like";
          project?: Maybe<{
            __typename?: "Project";
            id?: Maybe<number>;
            title?: Maybe<string>;
            skills?: Maybe<
              Array<
                Maybe<{
                  __typename?: "ProjectToSkill";
                  skill?: Maybe<{
                    __typename?: "Skill";
                    description?: Maybe<string>;
                  }>;
                }>
              >
            >;
            projectFeatures?: Maybe<
              Array<
                Maybe<{
                  __typename?: "ProjectToProjectFeature";
                  projectFeature?: Maybe<{
                    __typename?: "ProjectFeature";
                    description?: Maybe<string>;
                  }>;
                }>
              >
            >;
            projectStatuses?: Maybe<
              Array<
                Maybe<{
                  __typename?: "ProjectToProgressStatus";
                  progressStatus?: Maybe<{
                    __typename?: "ProgressStatus";
                    rate?: Maybe<string>;
                  }>;
                }>
              >
            >;
            usersRequested?: Maybe<
              Array<
                Maybe<{
                  __typename?: "JoinRequest";
                  status?: Maybe<number>;
                  user?: Maybe<{
                    __typename?: "User";
                    image_url?: Maybe<string>;
                  }>;
                }>
              >
            >;
          }>;
        }>
      >
    >;
    projectsRequested?: Maybe<
      Array<
        Maybe<{
          __typename?: "JoinRequest";
          project?: Maybe<{
            __typename?: "Project";
            id?: Maybe<number>;
            title?: Maybe<string>;
            skills?: Maybe<
              Array<
                Maybe<{
                  __typename?: "ProjectToSkill";
                  skill?: Maybe<{
                    __typename?: "Skill";
                    description?: Maybe<string>;
                  }>;
                }>
              >
            >;
            projectFeatures?: Maybe<
              Array<
                Maybe<{
                  __typename?: "ProjectToProjectFeature";
                  projectFeature?: Maybe<{
                    __typename?: "ProjectFeature";
                    description?: Maybe<string>;
                  }>;
                }>
              >
            >;
            projectStatuses?: Maybe<
              Array<
                Maybe<{
                  __typename?: "ProjectToProgressStatus";
                  progressStatus?: Maybe<{
                    __typename?: "ProgressStatus";
                    rate?: Maybe<string>;
                  }>;
                }>
              >
            >;
            usersRequested?: Maybe<
              Array<
                Maybe<{
                  __typename?: "JoinRequest";
                  status?: Maybe<number>;
                  user?: Maybe<{
                    __typename?: "User";
                    image_url?: Maybe<string>;
                  }>;
                }>
              >
            >;
          }>;
        }>
      >
    >;
  }>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  JoinRequest: ResolverTypeWrapper<JoinRequest>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Like: ResolverTypeWrapper<Like>;
  ProgressStatus: ResolverTypeWrapper<ProgressStatus>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Project: ResolverTypeWrapper<Project>;
  ProjectFeature: ResolverTypeWrapper<ProjectFeature>;
  ProjectToProgressStatus: ResolverTypeWrapper<ProjectToProgressStatus>;
  ProjectToProjectFeature: ResolverTypeWrapper<ProjectToProjectFeature>;
  ProjectToSkill: ResolverTypeWrapper<ProjectToSkill>;
  ProjectType: ResolverTypeWrapper<ProjectType>;
  Qa: ResolverTypeWrapper<Qa>;
  Query: ResolverTypeWrapper<{}>;
  Skill: ResolverTypeWrapper<Skill>;
  SkillToUser: ResolverTypeWrapper<SkillToUser>;
  User: ResolverTypeWrapper<User>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars["DateTime"];
  JoinRequest: JoinRequest;
  Int: Scalars["Int"];
  Like: Like;
  ProgressStatus: ProgressStatus;
  String: Scalars["String"];
  Project: Project;
  ProjectFeature: ProjectFeature;
  ProjectToProgressStatus: ProjectToProgressStatus;
  ProjectToProjectFeature: ProjectToProjectFeature;
  ProjectToSkill: ProjectToSkill;
  ProjectType: ProjectType;
  Qa: Qa;
  Query: {};
  Skill: Skill;
  SkillToUser: SkillToUser;
  User: User;
  Boolean: Scalars["Boolean"];
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type JoinRequestResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["JoinRequest"] = ResolversParentTypes["JoinRequest"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Like"] = ResolversParentTypes["Like"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProgressStatus"] = ResolversParentTypes["ProgressStatus"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Project"] = ResolversParentTypes["Project"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  skillDescription?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  featureDescription?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  projectType?: Resolver<
    Maybe<ResolversTypes["ProjectType"]>,
    ParentType,
    ContextType
  >;
  projectFeatures?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ProjectToProjectFeature"]>>>,
    ParentType,
    ContextType
  >;
  projectStatuses?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ProjectToProgressStatus"]>>>,
    ParentType,
    ContextType
  >;
  skills?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["ProjectToSkill"]>>>,
    ParentType,
    ContextType
  >;
  usersLiked?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Like"]>>>,
    ParentType,
    ContextType
  >;
  usersRequested?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["JoinRequest"]>>>,
    ParentType,
    ContextType
  >;
  usersAsked?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Qa"]>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFeatureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectFeature"] = ResolversParentTypes["ProjectFeature"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectToProgressStatusResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectToProgressStatus"] = ResolversParentTypes["ProjectToProgressStatus"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  progressStatus?: Resolver<
    Maybe<ResolversTypes["ProgressStatus"]>,
    ParentType,
    ContextType
  >;
  progressStatusId?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectToProjectFeatureResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectToProjectFeature"] = ResolversParentTypes["ProjectToProjectFeature"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  Project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  projectFeature?: Resolver<
    Maybe<ResolversTypes["ProjectFeature"]>,
    ParentType,
    ContextType
  >;
  projectFeatureId?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectToSkillResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectToSkill"] = ResolversParentTypes["ProjectToSkill"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  skill?: Resolver<Maybe<ResolversTypes["Skill"]>, ParentType, ContextType>;
  skillId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ProjectType"] = ResolversParentTypes["ProjectType"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Qa"] = ResolversParentTypes["Qa"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes["Project"]>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  getAllProjects?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Project"]>>>,
    ParentType,
    ContextType
  >;
  getProjectById?: Resolver<
    Maybe<ResolversTypes["Project"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetProjectByIdArgs, "id">
  >;
  getUserById?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryGetUserByIdArgs, "id">
  >;
};

export type SkillResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Skill"] = ResolversParentTypes["Skill"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillToUserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["SkillToUser"] = ResolversParentTypes["SkillToUser"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  skill?: Resolver<Maybe<ResolversTypes["Skill"]>, ParentType, ContextType>;
  skillId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  id?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  user_name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  twitter_account_url?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  github_account_url?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  image_url?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  experience?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  skills?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["SkillToUser"]>>>,
    ParentType,
    ContextType
  >;
  projectsLiked?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Like"]>>>,
    ParentType,
    ContextType
  >;
  projectsRequested?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["JoinRequest"]>>>,
    ParentType,
    ContextType
  >;
  projectsQa?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Project"]>>>,
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType;
  JoinRequest?: JoinRequestResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  ProgressStatus?: ProgressStatusResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  ProjectFeature?: ProjectFeatureResolvers<ContextType>;
  ProjectToProgressStatus?: ProjectToProgressStatusResolvers<ContextType>;
  ProjectToProjectFeature?: ProjectToProjectFeatureResolvers<ContextType>;
  ProjectToSkill?: ProjectToSkillResolvers<ContextType>;
  ProjectType?: ProjectTypeResolvers<ContextType>;
  Qa?: QaResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  SkillToUser?: SkillToUserResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

export const GetAllProjectsDocument = gql`
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

/**
 * __useGetAllProjectsQuery__
 *
 * To run a query within a React component, call `useGetAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProjectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(
    GetAllProjectsDocument,
    options
  );
}
export function useGetAllProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllProjectsQuery,
    GetAllProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(
    GetAllProjectsDocument,
    options
  );
}
export type GetAllProjectsQueryHookResult = ReturnType<
  typeof useGetAllProjectsQuery
>;
export type GetAllProjectsLazyQueryHookResult = ReturnType<
  typeof useGetAllProjectsLazyQuery
>;
export type GetAllProjectsQueryResult = Apollo.QueryResult<
  GetAllProjectsQuery,
  GetAllProjectsQueryVariables
>;
export const GetProjectByIdDocument = gql`
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

/**
 * __useGetProjectByIdQuery__
 *
 * To run a query within a React component, call `useGetProjectByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetProjectByIdQuery, GetProjectByIdQueryVariables>(
    GetProjectByIdDocument,
    options
  );
}
export function useGetProjectByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetProjectByIdQuery, GetProjectByIdQueryVariables>(
    GetProjectByIdDocument,
    options
  );
}
export type GetProjectByIdQueryHookResult = ReturnType<
  typeof useGetProjectByIdQuery
>;
export type GetProjectByIdLazyQueryHookResult = ReturnType<
  typeof useGetProjectByIdLazyQuery
>;
export type GetProjectByIdQueryResult = Apollo.QueryResult<
  GetProjectByIdQuery,
  GetProjectByIdQueryVariables
>;
export const GetUserByIdDocument = gql`
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
      skills {
        skill {
          description
        }
      }
      projectsLiked {
        project {
          id
          title
          skills {
            skill {
              description
            }
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
          usersRequested {
            status
            user {
              image_url
            }
          }
        }
      }
      projectsRequested {
        project {
          id
          title
          skills {
            skill {
              description
            }
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

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
