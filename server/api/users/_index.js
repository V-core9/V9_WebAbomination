
const  add =require('./actions/add');
const  remove =require('./remove');
const  update =require('./update');
const  view =require('./view');

const users = {
  add,
  remove,
  update,
  view,
};

module.exports = users;

console.log(users);
