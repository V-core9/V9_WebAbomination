const {User} = require('../../../models');

const user = new User();

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
    expect(await user.purge()).toEqual(true);
  });

  test("Create ["+itemsCount+"] Random USERS", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await user.create(await randomTestUser())).toEqual(true);
    }
  });

  test("Listing USERS Count", async () => {
    expect(await user.all()).toHaveLength(itemsCount);
  });

})();
