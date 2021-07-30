import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// TODO: 型を当てる
export const resolvers = {
  Query: {
    async getAllProjects() {
      const allProjects = await prisma.project.findMany({});
      console.log(allProjects);
      return allProjects;
    },
  },
};
