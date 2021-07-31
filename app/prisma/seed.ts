import { PrismaClient } from "@prisma/client";
import { skills } from "./seedData/skills";

const prisma = new PrismaClient();

async function main() {
  // skillsテーブル
  for (const data of skills) {
    await prisma.skill.create({
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
