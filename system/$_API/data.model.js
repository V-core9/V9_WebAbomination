
const v_database = require('v_database');

api_resp = async (res, data) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, true, 2));
};

module.exports = {
    rm_type: async (req, res) => {
        const data = await v_database.type.del(req.body.name);
        api_resp(res, data);

    },
    mk_type: async (req, res) => {
        const data = await v_database.type.new(req.body.name);
        api_resp(res, data);
    },
    list: async (req, res) => {
        const data = await v_database.type.view();
        api_resp(res, data);
    },
    all: async (req, res) => {
        const data = await v_database.item.view(req.params.type);
        api_resp(res, data);
    },
    one: async (req, res) => {
        const data = await v_database.item.view(req.params.type, req.params.name);
        api_resp(res, data);
    },
    mk: async (req, res) => {
        const data = await v_database.item.new(req.params.type, req.body);
        api_resp(res, data);
    },
    up: async (req, res) => {
        const data = await v_database.item.view(req.params.type, req.params.name);
        api_resp(res, data);
    },
    rm: async (req, res) => {
        const data = await v_database.item.del(req.params.type, req.params.name);
        api_resp(res, data);
    },
};

