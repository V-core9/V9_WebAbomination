const saltGenerator = require('../../../helpers/saltGenerator');

const maxLengthTest = 4;

generateSalt = async (saltLength) => {
  const generatedList = [];
  var running = true;
  while (running) {
    const freshSalt = await saltGenerator(saltLength);
    if (generatedList.includes(freshSalt)) {
      running = false;
      return { saltBytes: saltLength, count: generatedList.length };
    }

    generatedList.push(freshSalt);
    if (generatedList.length % 100000 === 0) {
      console.log(`Requested Items : ${generatedList.length}`);
    }
  }
};

(async () => {
  for (let i = 1; i <= maxLengthTest; i += 1) {
    test("Bytes count : " + i, async () => {
      var data = await generateSalt(i);
      var result = (data.count < Math.pow(36, i));
      expect(result).toBe(true);
    });

    test("Single Salt Lenght : " + i, async () => {
      var data = await saltGenerator(i);
      expect(data.length).toBe(i * 2);
    });
  }
})();
