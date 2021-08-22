import { PrismaClient } from "@prisma/client";
import { Resolvers } from "../generated/types";

const prisma = new PrismaClient();

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
              skill: true,
            },
          },
          usersLiked: {
            include: {
              user: true,
            },
          },
          usersRequested: {
            include: {
              user: true,
            },
          },
        },
      });
      return allProjects;
    },
    async getProjectById(parent, args) {
      const project = await prisma.project.findUnique({
        where: {
          id: args.id,
        },
        include: {
          projectType: {
            select: {
              description: true,
            },
          },
          projectFeatures: {
            include: {
              projectFeature: true,
            },
          },
          projectStatuses: {
            include: {
              progressStatus: true,
            },
          },
          skills: {
            include: {
              skill: true,
            },
          },
          usersLiked: {
            include: {
              user: true,
            },
          },
          usersRequested: {
            include: {
              user: true,
            },
          },
          usersAsked: {
            include: {
              user: true,
            },
          },
        },
      });
      return project;
    },
    async getUserById(parent, args) {
      const user = await prisma.user.findUnique({
        where: {
          id: args.id,
        },
        include: {
          // userの保有するスキル
          skills: {
            include: {
              skill: true,
            },
          },
          // userがいいねしたプロジェクト
          projectsLiked: {
            include: {
              project: {
                include: {
                  // userがいいねしたプロジェクトの特徴
                  projectFeatures: {
                    include: {
                      projectFeature: true,
                    },
                  },
                  // userがいいねしたプロジェクトの進捗状況
                  projectStatuses: {
                    include: {
                      progressStatus: true,
                    },
                  },
                  usersRequested: {
                    include: {
                      user: {
                        select: {
                          image_url: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          // userが参加 / 参加申請 中のプロジェクト
          projectsRequested: {
            include: {
              project: {
                include: {
                  // userが参加 / 参加申請 中のプロジェクトの特徴
                  projectFeatures: {
                    include: {
                      projectFeature: true,
                    },
                  },
                  // userが参加 / 参加申請 中のプロジェクトの進捗状況
                  projectStatuses: {
                    include: {
                      progressStatus: true,
                    },
                  },
                  // userがいいねしたプロジェクトの参加ユーザー
                  usersRequested: {
                    include: {
                      user: {
                        select: {
                          image_url: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
      return user;
    },
  },
};
