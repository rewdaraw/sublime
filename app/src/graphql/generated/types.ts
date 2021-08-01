import { GraphQLResolveInfo } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type JoinRequest = {
  __typename?: 'JoinRequest';
  id: Scalars['Int'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
};

export type Like = {
  __typename?: 'Like';
  id: Scalars['Int'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
};

export type ProgressStatus = {
  __typename?: 'ProgressStatus';
  id: Scalars['Int'];
  rate?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  projectType?: Maybe<ProjectType>;
  projectFeatures?: Maybe<Array<ProjectToProjectFeature>>;
  projectStatuses?: Maybe<Array<ProjectToProgressStatus>>;
  skills?: Maybe<Array<ProjectToSkill>>;
  usersLiked?: Maybe<Array<Like>>;
  usersRequested?: Maybe<Array<JoinRequest>>;
  usersAsked?: Maybe<Array<Qa>>;
  created_at?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectFeature = {
  __typename?: 'ProjectFeature';
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectToProgressStatus = {
  __typename?: 'ProjectToProgressStatus';
  id: Scalars['Int'];
  progressStatus?: Maybe<ProgressStatus>;
  progressStatusId?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
};

export type ProjectToProjectFeature = {
  __typename?: 'ProjectToProjectFeature';
  id: Scalars['Int'];
  Project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  ProjectFeature?: Maybe<ProjectFeature>;
  projectFeatureId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
};

export type ProjectToSkill = {
  __typename?: 'ProjectToSkill';
  id: Scalars['Int'];
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  skill?: Maybe<Skill>;
  skillId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ProjectType = {
  __typename?: 'ProjectType';
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Qa = {
  __typename?: 'Qa';
  id: Scalars['Int'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllProjects?: Maybe<Array<Maybe<Project>>>;
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
};

export type SkillToUser = {
  __typename?: 'SkillToUser';
  id: Scalars['Int'];
  skill?: Maybe<Skill>;
  skillId?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  user_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  twitter_account_url?: Maybe<Scalars['String']>;
  github_account_url?: Maybe<Scalars['String']>;
  image_url?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  experience?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<SkillToUser>>;
  projectsLiked?: Maybe<Array<Like>>;
  projectsRequested?: Maybe<Array<JoinRequest>>;
  projectsQa?: Maybe<Array<Project>>;
  created_at: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type GetAllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProjectsQuery = (
  { __typename?: 'Query' }
  & { getAllProjects?: Maybe<Array<Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title' | 'description' | 'created_at' | 'updatedAt'>
    & { projectType?: Maybe<(
      { __typename?: 'ProjectType' }
      & Pick<ProjectType, 'id' | 'description'>
    )>, projectFeatures?: Maybe<Array<(
      { __typename?: 'ProjectToProjectFeature' }
      & { ProjectFeature?: Maybe<(
        { __typename?: 'ProjectFeature' }
        & Pick<ProjectFeature, 'id' | 'description'>
      )> }
    )>>, projectStatuses?: Maybe<Array<(
      { __typename?: 'ProjectToProgressStatus' }
      & { progressStatus?: Maybe<(
        { __typename?: 'ProgressStatus' }
        & Pick<ProgressStatus, 'id' | 'rate'>
      )> }
    )>>, skills?: Maybe<Array<(
      { __typename?: 'ProjectToSkill' }
      & { skill?: Maybe<(
        { __typename?: 'Skill' }
        & Pick<Skill, 'id' | 'description'>
      )> }
    )>>, usersLiked?: Maybe<Array<(
      { __typename?: 'Like' }
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'user_name' | 'email' | 'twitter_account_url' | 'github_account_url' | 'image_url' | 'type' | 'experience' | 'description'>
        & { skills?: Maybe<Array<(
          { __typename?: 'SkillToUser' }
          & { skill?: Maybe<(
            { __typename?: 'Skill' }
            & Pick<Skill, 'id' | 'description'>
          )> }
        )>> }
      )> }
    )>>, usersAsked?: Maybe<Array<(
      { __typename?: 'Qa' }
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'user_name' | 'email' | 'twitter_account_url' | 'github_account_url' | 'image_url' | 'type' | 'experience' | 'description'>
        & { skills?: Maybe<Array<(
          { __typename?: 'SkillToUser' }
          & { skill?: Maybe<(
            { __typename?: 'Skill' }
            & Pick<Skill, 'id' | 'description'>
          )> }
        )>> }
      )> }
    )>>, usersRequested?: Maybe<Array<(
      { __typename?: 'JoinRequest' }
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'user_name' | 'email' | 'twitter_account_url' | 'github_account_url' | 'image_url' | 'type' | 'experience' | 'description'>
        & { skills?: Maybe<Array<(
          { __typename?: 'SkillToUser' }
          & { skill?: Maybe<(
            { __typename?: 'Skill' }
            & Pick<Skill, 'id' | 'description'>
          )> }
        )>> }
      )> }
    )>> }
  )>>> }
);



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  JoinRequest: ResolverTypeWrapper<JoinRequest>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Like: ResolverTypeWrapper<Like>;
  ProgressStatus: ResolverTypeWrapper<ProgressStatus>;
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  JoinRequest: JoinRequest;
  Int: Scalars['Int'];
  String: Scalars['String'];
  Like: Like;
  ProgressStatus: ProgressStatus;
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
  Boolean: Scalars['Boolean'];
};

export type JoinRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['JoinRequest'] = ResolversParentTypes['JoinRequest']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProgressStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProgressStatus'] = ResolversParentTypes['ProgressStatus']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  projectType?: Resolver<Maybe<ResolversTypes['ProjectType']>, ParentType, ContextType>;
  projectFeatures?: Resolver<Maybe<Array<ResolversTypes['ProjectToProjectFeature']>>, ParentType, ContextType>;
  projectStatuses?: Resolver<Maybe<Array<ResolversTypes['ProjectToProgressStatus']>>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['ProjectToSkill']>>, ParentType, ContextType>;
  usersLiked?: Resolver<Maybe<Array<ResolversTypes['Like']>>, ParentType, ContextType>;
  usersRequested?: Resolver<Maybe<Array<ResolversTypes['JoinRequest']>>, ParentType, ContextType>;
  usersAsked?: Resolver<Maybe<Array<ResolversTypes['Qa']>>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectFeature'] = ResolversParentTypes['ProjectFeature']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectToProgressStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectToProgressStatus'] = ResolversParentTypes['ProjectToProgressStatus']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  progressStatus?: Resolver<Maybe<ResolversTypes['ProgressStatus']>, ParentType, ContextType>;
  progressStatusId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectToProjectFeatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectToProjectFeature'] = ResolversParentTypes['ProjectToProjectFeature']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ProjectFeature?: Resolver<Maybe<ResolversTypes['ProjectFeature']>, ParentType, ContextType>;
  projectFeatureId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectToSkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectToSkill'] = ResolversParentTypes['ProjectToSkill']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  skill?: Resolver<Maybe<ResolversTypes['Skill']>, ParentType, ContextType>;
  skillId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProjectTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProjectType'] = ResolversParentTypes['ProjectType']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Qa'] = ResolversParentTypes['Qa']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType>;
  projectId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAllProjects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
};

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillToUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillToUser'] = ResolversParentTypes['SkillToUser']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skill?: Resolver<Maybe<ResolversTypes['Skill']>, ParentType, ContextType>;
  skillId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter_account_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  github_account_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  experience?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Maybe<Array<ResolversTypes['SkillToUser']>>, ParentType, ContextType>;
  projectsLiked?: Resolver<Maybe<Array<ResolversTypes['Like']>>, ParentType, ContextType>;
  projectsRequested?: Resolver<Maybe<Array<ResolversTypes['JoinRequest']>>, ParentType, ContextType>;
  projectsQa?: Resolver<Maybe<Array<ResolversTypes['Project']>>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
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


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;


export const GetAllProjectsDocument = gql`
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
export function useGetAllProjectsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options);
      }
export function useGetAllProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProjectsQuery, GetAllProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProjectsQuery, GetAllProjectsQueryVariables>(GetAllProjectsDocument, options);
        }
export type GetAllProjectsQueryHookResult = ReturnType<typeof useGetAllProjectsQuery>;
export type GetAllProjectsLazyQueryHookResult = ReturnType<typeof useGetAllProjectsLazyQuery>;
export type GetAllProjectsQueryResult = Apollo.QueryResult<GetAllProjectsQuery, GetAllProjectsQueryVariables>;