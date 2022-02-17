const userModel = require('../../../models/user');
var faker = require('faker');


randomTestUser = async () => {
  return {
    username: faker.internet.userName(),
    password:  faker.internet.password(),
    email: faker.internet.email()
  };
}

(async() => {
  console.log(Object.keys(userModel));

  console.log(await userModel.create(await randomTestUser()));

  console.log(await userModel.all());
})();
