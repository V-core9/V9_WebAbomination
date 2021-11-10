var path = require('path');
var express = require('express');
var app = express();

const v9 = {
    config : require(path.join(__dirname, '../config/server'))
};

app.use(express.static(v9.config.$_static_dir));

var server = app.listen(v9.config.$_port, function () {
    console.log(`listening on ${v9.config.getLocation()}`);
});

