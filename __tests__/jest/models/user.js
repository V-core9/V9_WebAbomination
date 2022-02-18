const user = require('../../../models');
var faker = require('faker');

var itemsCount = 200;

randomTestUser = async () => {
  return {
    username: faker.internet.userName(),
    password:  faker.internet.password(),
    email: faker.internet.email()
  };
}

(async() => {

  test("Delete All USERS", async () => {
    expect(await page.purge()).toEqual(true);
  });

  test("Create ["+itemsCount+"] Random USERS", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await user.create(await randomTestUser())).toEqual(true);
    }
  });

  test("Listing USERS Count", async () => {
    var items = await page.all();
    expect(items).toHaveLength(itemsCount);
  });

})();
