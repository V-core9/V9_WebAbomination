const { v_db } = require('../../../v_db/');

const v_pages = {

    _list: {},

    get_list: async () => {
        return await v_db.item.view('pages');
    },

    get_single: async (name) => {
        return (name !== undefined) ? await v_db.item.view('pages', name) : false;
    },

    load: async () => {
        const resp = await v_pages.get_list();

        for (var i = 0; i < resp.length; i++) {
            v_pages._list[resp[i]] = await v_pages.get_single(resp[i]);
        }

        return v_pages._list;
    },

    render: require('./render')
};



module.exports = v_pages;
