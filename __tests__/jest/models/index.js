const { Page, Post, User } = require('../../../models');
const page = new Page();
const post = new Post();
const user = new User();

var faker = require('faker');

var itemsCount = 200;

randomTestUser = async () => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email()
  };
};

randomTestPost = async () => {
  return {
    slug: faker.lorem.slug(),
    title: faker.lorem.words(),
    content: faker.lorem.text(),
    published: (Date.now() % 2 === 0 ? true : false),
  };
};

randomTestPage = async () => {
  return {
    slug: faker.lorem.slug(),
    title: faker.lorem.words(),
    content: faker.lorem.text(),
    published: (Date.now() % 2 === 0 ? true : false),
  };
};



(async () => {
  //? USER
  test("1.[mod.PURGE] USER", async () => {
    expect(await user.purge()).toEqual(true);
  });

  test("2.[mod.CREATE] [" + itemsCount + "] USERS", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await user.create(await randomTestUser())).toEqual(true);
    }
  });

  test("3.[mod.ALL] Listing USERS Count", async () => {
    expect(await user.all()).toHaveLength(itemsCount);
  });
  //!EOF USER

  //? POST
  test("4.[mod.PURGE] POST", async () => {
    expect(await post.purge()).toEqual(true);
  });

  test("5.[mod.CREATE] Create ["+itemsCount+"] Random Posts", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await post.create(await randomTestPost())).toEqual(true);
    }
  });

  test("6.[mod.ALL] Listing Posts Count", async () => {
    expect(await post.all()).toHaveLength(itemsCount);
  });

  test("7.[mod.UPDATE] Update a post to be home with / as slug", async () => {
    var postData = await randomTestPost();
    postData.slug = '/';

    var posts = await post.all();
    var id = posts[2].id;
    expect(await post.update(id, postData)).toEqual(true);
  });
  //!EOF POST

  //? PAGE
  test("8.[mod.PURGE] Delete All Pages", async () => {
    expect(await page.purge()).toEqual(true);
  });

  test("9.[mod.CREATE] Create ["+itemsCount+"] Random Pages", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await page.create(await randomTestPage())).toEqual(true);
    }
  });

  test("10.[mod.ALL] Listing Pages Count", async () => {
    expect(await page.all()).toHaveLength(itemsCount);
  });

  test("11.[mod.UPDATE] Update a page to be home with / as slug", async () => {
    var pageData = await randomTestPage();
    pageData.slug = '/';

    var pages = await page.all();
    var id = pages[2].id;
    expect(await page.update(id, pageData)).toEqual(true);
  });
  //!EOF PAGE

})();
