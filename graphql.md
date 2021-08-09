# GraphQL APIの作り方 - Apollo Server編

## server側(typeDefs, resolvers)でAPIを作成
1. typeDefs(graphql schema)ファイルでルートのQuery or Mutationタイプに新規にfield(Query or Mutation)を追加する

// src/graphql/server/typeDefs.ts
```
type Query {
    # 以下Fields
    getAllProjects: [Project]
    getProjectById(id: Int!): Project,
  }
```

2. resolversファイルの中で、上記で追加したQuery or Mutationに対応するresolver関数を定義

// src/graphql/server/resolvers.ts
```
export const resolvers: Resolvers = {
  Query: {
    async getAllProjects() {
      const allProjects = await prisma.project.findMany({
        include: {
          projectType: true,
          projectFeatures: {
            include: {
              projectFeature: true,
            },
          },
          skills: {
            include: {
              skill: {
                select: {
                  id: true,
                  title: true
                }
              }
            },
          },
        }  
      });
      return allProjects;
    },
    async getProjectById(parent, args, context) {
      const project = await prisma.project.findUnique({
        where: {
          id: args.id,
        },
      });
      return project;
    },
  },
};
```

## client側(queries, mutations)で、server側で作ったschemaを参考にquery or mutationを作成する

// src/graphql/client/queries.ts
```
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
    }
  }
`;
```

## この後でgraphql-code-generatorでtypesを作成する