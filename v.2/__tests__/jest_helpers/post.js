const fakePost = require('./fake_post');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (itemsCount = 5) => {

  //? Confirming clear database table
  test("5.Delete ALL POSTs", async () => {
    expect(await prisma.post.deleteMany()).toEqual({count: 0});
  });

  //? Create bunch of fake posts
  test("6.[mod.CREATE] Create [" + itemsCount + "] Random Posts", async () => {
    for (var i = 0; i < itemsCount; i++) {
      const fkPost = await fakePost();
      const results = await prisma.post.create({ data: fkPost });
      expect(results !== null).toEqual(true);
    }
  });


  //? Compare number of POSTS to itemsCount
  test("7.[mod.ALL] Listing Posts Count", async () => {
    expect(await prisma.post.findMany()).toHaveLength(itemsCount);
  });

  //? Update one post to have a specific slug
  test("8.[mod.UPDATE] Update a post to be home with / as slug", async () => {
    var postData = await fakePost();
    postData.slug = 'the-big-opening';
    var posts = await prisma.post.findMany();
    expect(await prisma.post.update({ where: { id: posts[2].id }, data: postData }) !== null).toEqual(true);
  });


  //? And DELETE it all once more when finishing
  test("9.DELETE ALL POSTS", async () => {
    expect(await prisma.post.deleteMany()).toEqual({count: 200});
  });

};
