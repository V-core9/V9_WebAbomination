
const v_database = require('v_database');

api_resp = async (data) => {
    const {res, rez} = data;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(rez, true, 2));
};

module.exports = {
    rm_type: async (req, res) => {
        api_resp({ res, rez: await v_database.type.del(req.body.name)});
    },
    mk_type: async (req, res) => {
        api_resp({ res, rez: await v_database.type.new(req.body.name)});
    },
    list: async (req, res) => {
        api_resp({ res, rez: await v_database.type.view()});
    },
    all: async (req, res) => {
        api_resp({res, rez: await v_database.item.view(req.params.type)});
    },
    one: async (req, res) => {
        api_resp({ res, rez: await v_database.item.view(req.params.type, req.params.name)});
    },
    mk: async (req, res) => {
        api_resp({res, rez: await v_database.item.new(req.params.type, req.body)});
    },
    up: async (req, res) => {
        api_resp({res, rez: await v_database.item.view(req.params.type, req.params.name)});
    },
    rm: async (req, res) => {
        api_resp({res, rez: await v_database.item.del(req.params.type, req.params.name)});
    },
};

