import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: 型を当てる
export const resolvers = {
  Query: {
    async getAllProjects() {
      const allProjects = await prisma.project.findMany({
        include: {
          projectType: true,
          projectFeatures: true,
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
          usersLiked: true,
          usersRequested: true,
          usersAsked: true,
        },
      });
      console.log(allProjects);
      return allProjects;
    },
  },
};
