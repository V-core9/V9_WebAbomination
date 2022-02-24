const v_to_sha256 = require('v_to_sha256');
module.exports = users = [];

(async () => {

  //! #1 user prep [ v-core9 ]
  users.push({
    email: 'slavko.vuletic92@gmail.com',
    username: 'v-core9',
    password: await v_to_sha256('01234567890123456789'),
    salt: '0123456789',
    roleId: 1
  });

  //! #2 user prep [ ana_v9 ]
  users.push({
    email: 'blagojevic021@gmail.com',
    username: 'ana_v9',
    password: await v_to_sha256('01234567890123456789'),
    salt: '0123456789',
    roleId: 2
  });

})();

