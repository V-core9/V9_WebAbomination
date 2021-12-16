
const v_database = require('v_database');

module.exports = {
    type: async (req, res) => {
        res.send(await v_database.type.view());
    },
    all: async (req, res) => {
        res.send(await v_database.type.view(req.params.type));
    },
    one: async (req, res) => {
        res.send(await v_database.item.view(req.params.type, req.params.name));
    },
};

