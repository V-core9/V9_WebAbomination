const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const roles = require('./seeds/roles');
const users = require('./seeds/users');
const posts = require('./seeds/posts');
const pages = require('./seeds/pages');

(async () => {
  console.log("Started V-core9 Database Seeding >>>");

  console.log("1. CleanUp : Deleting all database data.");
  await prisma.role.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});
  await prisma.page.deleteMany({});

  console.log("2. Seeding Data:");
  console.log("-> Model : Role");
  for (let i = 0; i < roles.length; i++) {
    await prisma.role.create({data: roles[i]});
  }

  console.log("-> Model : User");
  for (let i = 0; i < users.length; i++) {
    await prisma.user.create({data: users[i]});
  }

  console.log("-> Model : Post");
  for (let i = 0; i < posts.length; i++) {
    await prisma.post.create({data: posts[i]});
  }

  console.log("-> Model : Page");
  for (let i = 0; i < pages.length; i++) {
    await prisma.page.create({data: pages[i]});
  }

  console.log("3. DONE >> Proceeding to exit, Bye!");
  await prisma.$disconnect();
  process.exit(1);
})();
