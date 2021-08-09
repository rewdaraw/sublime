custom scalar typeの追加の仕方

1. codegen.ymlにconfigオプションを以下のように追加

```
generates:
  src/graphql/generated/types.ts:
    config:
      scalars:
        Date: Date
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typescript-resolvers"
      - "typescript-react-apollo"
```

2. typeDefs.ts(Schemaファイル)の中で``scalar``を以下のように追加

```
export const typeDefs = gql`
  scalar Date

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
    createdAt: Date
    updatedAt: Date
  }
`;
```