import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: 型を当てる
export const resolvers = {
  Query: {
    async getAllProjects() {
      const allProjects = await prisma.project.findMany({
        include: {
          projectType: true,
          projectFeatures: {
            include: {
              ProjectFeature: true,
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
      return allProjects;
    },
  },
};
