const fakeUser = require('./fake_user');
const { User } = require('../../models');
const user = new User();

module.exports = async (itemsCount = 5) => {
  //? USER
  test("1.[mod.PURGE] USER", async () => {
    expect(await user.purge()).toEqual(true);
  });

  test("2.[mod.CREATE] [" + itemsCount + "] USERS", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await user.create(await fakeUser())).toEqual(true);
    }
  });

  test("3.[mod.ALL] Listing USERS Count", async () => {
    expect(await user.all()).toHaveLength(itemsCount);
  });
  //!EOF USER
};
