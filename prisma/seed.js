const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
var { roles, users, posts, pages } = require('./seeds');

(async () => {
  console.log("Started V-core9 Database Seeding >>>");

  console.log("1. CleanUp : Deleting all database data.");
  console.log(await prisma.role.deleteMany());
  console.log(await prisma.user.deleteMany());
  console.log(await prisma.post.deleteMany());
  console.log(await prisma.page.deleteMany());

  console.log("2. Seeding Data:");
  console.log("-> Model : Role");
  for (let i = 0; i < roles.length; i++) {
    console.log(await prisma.role.create({ data: roles[i] }));
  }

  console.log("-> Model : User");
  for (let i = 0; i < users.length; i++) {
    console.log(await prisma.user.create({ data: users[i] }));
  }

  console.log("-> Model : Post");
  for (let i = 0; i < posts.length; i++) {
    console.log(await prisma.post.create({ data: posts[i] }));
  }

  console.log("-> Model : Page");
  for (let i = 0; i < pages.length; i++) {
    console.log(await prisma.page.create({ data: pages[i] }));
  }

  console.log("3. DONE >> Proceeding to exit, Bye!");
  console.log(await prisma.$disconnect());
  process.exit(1);

})();
