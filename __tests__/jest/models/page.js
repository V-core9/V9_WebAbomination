const { Page } = require('../../../models');
const page = new Page();

var faker = require('faker');

var itemsCount = 200;

randomTestPage = async () => {
  return {
    slug: faker.lorem.slug(),
    title: faker.lorem.words(),
    content: faker.lorem.text(),
    published: (Date.now() % 2 === 0 ? true : false),
  };
}

(async () => {

  test("1.[mod.PURGE] Delete All Pages", async () => {
    expect(await page.purge()).toEqual(true);
  });

  test("2.[mod.CREATE] Create ["+itemsCount+"] Random Pages", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await page.create(await randomTestPage())).toEqual(true);
    }
  });

  test("3.[mod.ALL] Listing Pages Count", async () => {
    expect(await page.all()).toHaveLength(itemsCount);
  });

  test("4.[mod.UPDATE] Update a page to be home with / as slug", async () => {
    var pageData = await randomTestPage();
    pageData.slug = '/';

    var pages = await page.all();
    var id = pages[2].id;
    expect(await page.update(id, pageData)).toEqual(true);
  });

})();
