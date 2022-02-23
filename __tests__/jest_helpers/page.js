const fakePage = require('./fake_page');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (itemsCount = 5) => {

  test("10. Delete All Pages", async () => {
    expect(await prisma.page.deleteMany()).toEqual({ "count": 0 });
  });

  test("11. Create [" + itemsCount + "] Random Pages", async () => {
    for (var i = 0; i < itemsCount; i++) {
      const fkPage = await fakePage();
      const results = await prisma.page.create({ data: fkPage });
      expect(results !== null).toEqual(true);
    }
  });

  //? Compare number of PAGES to itemsCount
  test("12. Listing Pages Count", async () => {
    const results = await prisma.page.findMany();
    expect(results).toHaveLength(itemsCount);
  });

  //? Update one page to have a specific slug for home
  test("13.[mod.UPDATE] Update a page to be home with / as slug", async () => {
    var pageData = await fakePage();
    pageData.slug = '/';
    var pages = await prisma.page.findMany();
    var id = pages[2].id;
    expect(await prisma.page.update({ where: { id: id }, data: pageData }) !== null).toEqual(true);
  });

  //? And DELETE it all once more when finishing
  test("14. Delete All Pages", async () => {
    expect(await prisma.page.deleteMany()).toEqual({ "count": 200 });
  });
};
