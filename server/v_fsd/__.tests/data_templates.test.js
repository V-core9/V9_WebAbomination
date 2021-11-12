const dataTemplates = require('../data/templates/index');

console.log(dataTemplates);


var testUser = {
  username: "YEA USERNAME",
  password: "asdnoaisnd13213",
  role: "user"
};
console.log(dataTemplates.users(testUser));
console.log(dataTemplates.users());



var testBook = {
  author: "Hans Christian Andersen",
  country: "Denmark",
  language: "Danish",
  pages: 784,
  title: "Fairy tales",
  year: 1836
};
console.log(dataTemplates.books(testBook));
console.log(dataTemplates.books());




var testPage = {
  title: "example page",
  path: "/example_page",
  description: "example placeholder for page description",
  status: "draft",
  author: 1123
};
console.log(dataTemplates.pages(testPage));
console.log(dataTemplates.pages());

