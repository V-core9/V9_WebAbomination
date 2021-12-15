
const v_database = require('v_database');

const post = {
    list: async (req, res) => {
        res.end(await v_database.type.view('posts'));
    },
    name: async (req, res) => {
        res.end(await v_database.item.view('posts', req.params.name));
    },
};

module.exports = post;
