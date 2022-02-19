var faker = require('faker');

module.exports = async () => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email()
  };
};
