const v_to_sha256 = require('v_to_sha256');
const { saltGenerator } = require('../../helpers');
module.exports = users = [
  {
    email: 'slavko.vuletic92@gmail.com',
    username: 'v-core9',
    password: '0123456789',
    roleId: 1
  },
  {
    email: 'blagojevic021@gmail.com',
    username: 'ana_v9',
    password: '0123456789',
    roleId: 2
  }
];

users.map(async (user) => {
  user.salt = saltGenerator();
  user.password = await v_to_sha256(user.password + user.salt);
  await prisma.user.create({ data: user });
});
