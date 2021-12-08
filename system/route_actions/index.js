const v_render = require('../modules/vPages/v_render');

const route_actions = {
    'index': async (req, res) => {
        v_render(req, res, { page_name: 'index' });
    },
    'about': async (req, res) => {
        v_render(req, res, { page_name: 'about' });
    },
    'contact': async (req, res) => {
        v_render(req, res, { page_name: 'contact' });
    },
    'login': async (req, res) => {
        v_render(req, res, { page_name: 'login' });
    },
    'privacy_policy': async (req, res) => {
        v_render(req, res, { page_name: 'privacy_policy' });
    },
    'register': async (req, res) => {
        v_render(req, res, { page_name: 'register' });
    },
    'system_status': async (req, res) => {
        v_render(req, res, { page_name: 'system_status' });
    },
    'terms_policy': async (req, res) => {
        v_render(req, res, { page_name: 'terms_policy' });
    },
};

module.exports = route_actions;
