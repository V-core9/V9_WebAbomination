const contentPath = "../data/content/";

const $_data= {
  users: require(contentPath+"users.json"),
  pages: require(contentPath+"pages.json"),
  books: require(contentPath+"books.json"),
};

module.exports = $_data;
