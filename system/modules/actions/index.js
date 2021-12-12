const v_render = require('../pages/v_render');

const v_action = {
    index: async (req, res) => {
        v_render(req, res, 'index');
    },
    about: async (req, res) => {
        v_render(req, res, 'about');
    },
    contact: async (req, res) => {
        v_render(req, res, 'contact');
    },
    login: async (req, res) => {
        v_render(req, res, 'login');
    },
    privacy_policy: async (req, res) => {
        v_render(req, res, 'privacy_policy');
    },
    register: async (req, res) => {
        v_render(req, res, 'register');
    },
    system_status: async (req, res) => {
        v_render(req, res, 'system_status');
    },
    terms_policy: async (req, res) => {
        v_render(req, res, 'terms_policy');
    },
    /*statistics: async (req, res) => {
        v_render(req, res, { page_name: 'statistics' });
    },*/
};

module.exports = v_action;
