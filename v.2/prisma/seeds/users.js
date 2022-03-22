const v_to_sha256 = require('v_to_sha256');
const { saltGenerator } = require('../../helpers');


var users = [
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

(async ()=> {
  for (let i = 0; i < users.length; i++) {
    users[i].salt = await saltGenerator();
    users[i].password = await v_to_sha256(users[i].password + users[i].salt);
  }
})();

module.exports = users;
