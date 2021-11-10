var path = require('path');
var express = require('express');
var app = express();

const v9 = {
    config : require('./v9.config.js')
};

var staticDir = path.join(__dirname, v9.config.$_static_dir);

app.use(express.static(staticDir));

var server = app.listen(v9.config.$_port, function () {
    console.log(`listening on ${v9.config.getLocation()}`);
});

