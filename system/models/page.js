const vDB = require('v_database');

const page = {

    byName: async (name) => {
        return await page.one(name);
    },

    byId: async (id) => {
        return await page.one(id);
    },

    one: async (name) => {
        return await vDB.item.view('pages', name);
    },

    all: async () => {
        return await vDB.type.view('pages');
    },

    create: async (data) => {

        
        const { name, content } = data;
        const $page = await page.one(name);
        if ($page) {
            return {
                success: false,
                message: 'Page already exists'
            };
        }
        return await vDB.item.new('pages', content, name);
    },

    remove: async (name) => {
        return await vDB.item.del('pages', name);
    }
    
};

module.exports = page;
