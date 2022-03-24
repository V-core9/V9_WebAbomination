sample = async () => {
  return true;
};

test("Basic Example", async () => {
  expect(await sample()).toEqual(true);
});
