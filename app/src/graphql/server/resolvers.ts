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
        },
      });
      return project;
    },
  },
};
