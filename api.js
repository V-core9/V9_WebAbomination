const $_v = require('./$_v');

$_v.get('/api_v1/:path', function (req, res) {
  res.json(req.params);
});

