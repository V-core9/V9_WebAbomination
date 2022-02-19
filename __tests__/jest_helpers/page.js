const fakePage = require('./fake_page');
const { Page } = require('../../models');
const page = new Page();

module.exports = async (itemsCount = 5) => {

  test("8.[mod.PURGE] Delete All Pages", async () => {
    expect(await page.purge()).toEqual(true);
  });

  test("9.[mod.CREATE] Create [" + itemsCount + "] Random Pages", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await page.create(await fakePage())).toEqual(true);
    }
  });

  test("10.[mod.ALL] Listing Pages Count", async () => {
    expect(await page.all()).toHaveLength(itemsCount);
  });

  test("11.[mod.UPDATE] Update a page to be home with / as slug", async () => {
    var pageData = await fakePage();
    pageData.slug = '/';
    var pages = await page.all();
    var id = pages[2].id;
    expect(await page.update(id, pageData)).toEqual(true);
  });

};
