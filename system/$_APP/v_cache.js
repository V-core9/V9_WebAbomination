const v_cache = {
    refresh_time: 1000,

    _items: {},

    get: async (key) => {
        try {
            return (v_cache._items[key] !== undefined) ? v_cache._items[key] : false;
        } catch (e) {
            return false;
        }
    },

    save: async (key, value) => {
        v_cache._items[key] = { value: value, time: Date.now() };
    }
    
};

module.exports = v_cache;
