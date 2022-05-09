const v_to_sha256 = require('v_to_sha256');
const { saltGenerator } = require('../../helpers');


/*
* INIT Users
*/

var users = [

  {
    email: 'slavko.vuletic92@gmail.com',
    username: 'v-core9',
    password: '0123456789',
    role: "ADMIN"
  },

  {
    email: 'blagojevic021@gmail.com',
    username: 'ana_v9',
    password: '0123456789',
    role: "MANAGER"
  },

  {
    email: 'slavko_vuletic@hotmail.com',
    username: 'slavko_v9',
    password: '0123456789',
    role: "MERCHANT"
  }

];

(async () => {
  for (let i = 0; i < users.length; i++) {
    users[i].salt = await saltGenerator();
    users[i].password = await v_to_sha256(users[i].password + users[i].salt);
  }
})();

module.exports = users;
