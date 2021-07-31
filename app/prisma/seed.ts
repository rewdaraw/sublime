import { PrismaClient } from "@prisma/client";
import { skills } from "./seedData/skills";
import { users } from "./seedData/users";
import { projects } from "./seedData/projects";
import { progress_statuses } from "./seedData/progress_statuses";
import { project_features } from "./seedData/project_features";
import { project_types } from "./seedData/project_types";

const prisma = new PrismaClient();

// TODO: 以下createをupsertへ変更する
async function main() {
  // skillsテーブル
  for (const data of skills) {
    await prisma.skill.create({
      data,
    });
  }

  // usersテーブル
  for (const data of users) {
    await prisma.user.create({
      data,
    });
  }

  // projectsテーブル
  for (const data of projects) {
    await prisma.project.create({
      data,
    });
  }

  // progress_statusesテーブル
  for (const data of progress_statuses) {
    await prisma.progressStatus.create({
      data,
    });
  }

  // project_featuresテーブル
  for (const data of project_features) {
    await prisma.projectFeature.create({
      data,
    });
  }

  // project_typesテーブル
  for (const data of project_types) {
    await prisma.projectType.create({
      data,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
