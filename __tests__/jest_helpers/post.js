const fakePost = require('./fake_post');
const { Post } = require('../../models');
const post = new Post();

module.exports = async (itemsCount = 5) => {

  test("4.[mod.PURGE] POST", async () => {
    expect(await post.purge()).toEqual(true);
  });

  test("5.[mod.CREATE] Create ["+itemsCount+"] Random Posts", async () => {
    for (var i = 0; i < itemsCount; i++) {
      expect(await post.create(await fakePost())).toEqual(true);
    }
  });

  test("6.[mod.ALL] Listing Posts Count", async () => {
    expect(await post.all()).toHaveLength(itemsCount);
  });

  test("7.[mod.UPDATE] Update a post to be home with / as slug", async () => {
    var postData = await fakePost();
    postData.slug = '/';
    var posts = await post.all();
    var id = posts[2].id;
    expect(await post.update(id, postData)).toEqual(true);
  });

};
