
const v_database = require('v_database');

const page = {
    list: async (req, res) => {
        res.end(await v_database.type.view('pages'));
    },
    name: async (req, res) => {
        res.end(await v_database.item.view('pages', req.params.name));
    },
};

module.exports = page;
