const pageModel = require('../../../models/page');
var faker = require('faker');


randomTestPage = async () => {
  return {
    slug: faker.internet.userName(),
    title:  faker.internet.password(),
    content: faker.internet.email(),
    published: true,
    authorId: 1
  };
}

(async() => {
  console.log(Object.keys(pageModel));

  console.log(await pageModel.create(await randomTestPage()));

  console.log(await pageModel.all());
})();
