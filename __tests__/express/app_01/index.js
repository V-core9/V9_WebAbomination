(async ()=> {
  const express = require('express');
  const app = express();

  port = 3000;

  await require('./routes')(app);

  app.listen(port, async () => {
    console.log('http://localhost:'+port+'/');
  });

})();
