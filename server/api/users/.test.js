const users = require('./_index');

console.log(users.add({ name: 'demoUsername', register_ts: Date.now() }));
console.log(users.remove({ name: 'demoUsername', register_ts: Date.now() }));
console.log(users.update({ name: 'demoUsername', register_ts: Date.now() }));
console.log(users.view({ name: 'demoUsername', register_ts: Date.now() }));
