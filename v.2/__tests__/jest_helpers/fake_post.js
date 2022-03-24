var faker = require('faker');

module.exports = async () => {
  return {
    slug: faker.lorem.slug(),
    title: faker.lorem.words(),
    content: faker.lorem.text(),
    published: (Date.now() % 2 === 0 ? true : false),
  };
};
