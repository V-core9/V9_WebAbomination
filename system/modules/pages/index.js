const v_database = require('v_database');

const v_pages = {

    // Location of data that gets loaded as pages
    _list: {},

    // Gets a list of pages
    get_list: async () => {
        return await v_database.item.view('pages');
    },

    // Gets a single page by name/id
    get_single: async (name) => {
        return (name !== undefined) ? await v_database.item.view('pages', name) : false;
    },

    // Loads all pages into _list for rendering
    load: async () => {
        const resp = await v_pages.get_list();

        for (var i = 0; i < resp.length; i++) {
            var res_in = await v_pages.get_single(resp[i]);
            v_pages._list[resp[i]] = res_in;
        }

        return v_pages._list;
    },

    render: require('./render')
};



module.exports = v_pages;
