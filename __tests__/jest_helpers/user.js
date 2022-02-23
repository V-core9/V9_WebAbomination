const fakeUser = require('./fake_user');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (itemsCount = 5) => {


  //? Confirmation of that cleanup with first test
  test("1. Delete 0 init USERs", async () => {
    //? Cleanup of database table
    try {
      await prisma.page.deleteMany();
      await prisma.post.deleteMany();
      await prisma.user.deleteMany();
    } catch (error) {
      // console.log(error);
    }
    expect(await prisma.user.deleteMany()).toEqual({ count: 0 });
  });

  //? Create bunch of fake users
  test("2. Create [" + itemsCount + "] USERS", async () => {
    for (var i = 0; i < itemsCount; i++) {
      const fkUser = await fakeUser();
      const results = await prisma.user.create({ data: fkUser });
      expect(results !== null).toEqual(true);
    }
  });

  //? Compare number of users to itemsCount
  test("3. Listing USERS Count", async () => {
    expect(await prisma.user.findMany()).toHaveLength(itemsCount);
  });


  //? And DELETE it all once more when finishing
  test("4.DELETE ALL USERS", async () => {
    expect(await prisma.user.deleteMany()).toEqual({ count: 200 });
  });
};
