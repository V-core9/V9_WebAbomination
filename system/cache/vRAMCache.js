const vRAMCache = {
    refresh_time: 1000,

    _items: {},

    get: async (key) => {
        try {
            return (vRAMCache._items[key] !== undefined) ? vRAMCache._items[key] : false;
        } catch (e) {
            return false;
        }
    },

    save: async (key, value) => {
        vRAMCache._items[key] = { value: value, time: Date.now() };
    }
    
};

module.exports = vRAMCache;
